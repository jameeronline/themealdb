import { useEffect, useState } from "react";
import parse from "html-react-parser";

//shared
import { Container } from "src/components/shared";

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
  }, [schemaKey, id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (pageContent == null) {
    return;
  }

  return (
    <>
      <section className="cms-page">
        <Container>
          <article className="prose max-w-4xl pt-12">
            <header>
              <h1>{pageContent.pageTitle}</h1>
            </header>
            <div>{parse(pageContent.pageDetails)}</div>
          </article>
        </Container>
      </section>
    </>
  );
}
