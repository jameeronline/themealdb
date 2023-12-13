import { useEffect, useState } from "react";
import parse from "html-react-parser";

//Firebase
import appFlamelink from "src/server/firebaseDB";
import Spinner from "src/components/common/Spinner";

export default function Terms() {
  const [isLoading, setIsLoading] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const getCMSContent = async () => {
      try {
        setIsLoading(true);
        const page = await appFlamelink.content.get({
          schemaKey: "documentPages",
          populate: true,
        });

        setPageContent(page);
        setIsLoading(false);

        //console.log("All of your products:", page.__meta__.lastModifiedDate);
      } catch (error) {
        // handle any errors
        console.log(error);
      }
    };

    getCMSContent();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (pageContent == null) {
    return;
  }

  return (
    <>
      <article className="prose max-w-5xl">
        <header>
          <h1>{pageContent.title}</h1>
        </header>
        <div>{parse(pageContent.content)}</div>
      </article>
    </>
  );
}
