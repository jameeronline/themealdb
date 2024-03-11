import { useEffect, useState } from "react";

//Theme Components
import { Container } from "src/components/shared";

//Firebase
import appFlamelink from "src/server/firebaseDB";
import Spinner from "src/components/common/Spinner";

//Article
import Article from "./article";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const postRender = [];

  useEffect(() => {
    const getCMSContent = async () => {
      try {
        setIsLoading(true);
        const response = await appFlamelink.content.get({
          schemaKey: "blogs",
          populate: true,
          //fields: ["title", "summary", "slug", "author", "id", "date"],
        });

        setPosts(response);
        setIsLoading(false);

        //console.log("All of your products:", response);
        //console.log(Object.keys(response));
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

  if (posts == null) {
    return;
  }

  //Loop object and transform to arrays
  if (posts) {
    for (let post in posts) {
      postRender.push(posts[post]);
    }
  }

  return (
    <>
      <Container>
        {postRender.map((item, index) => (
          <Article key={index} item={item} />
        ))}
      </Container>
    </>
  );
}
