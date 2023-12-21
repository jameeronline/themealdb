import { useEffect, useState } from "react";
import parse from "html-react-parser";

//Firebase
import appFlamelink from "src/server/firebaseDB";
import Spinner from "src/components/common/Spinner";

export default function CMSPage({ schemaKey, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const getCMSContent = async () => {
      try {
        setIsLoading(true);
        // const page = await appFlamelink.content.get({
        //   schemaKey: schemaKey,
        //   populate: true,
        // });

        const cmsPage = await appFlamelink.content.get({
          schemaKey: schemaKey,
          entryId: id,
          populate: true,
        });

        //console.log(cmsPage);

        setPageContent(cmsPage);
        setIsLoading(false);
      } catch (error) {
        // handle any errors
        console.log(error);
      }
    };

    getCMSContent();
  }, [id]);

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
          <h1>{pageContent.pageTitle}</h1>
        </header>
        <div>{parse(pageContent.pageDetails)}</div>
      </article>
    </>
  );
}
