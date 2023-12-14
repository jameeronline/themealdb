import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format, formatRelative } from "date-fns";

//Firebase
import appFlamelink from "src/server/firebaseDB";
import Spinner from "src/components/common/Spinner";

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
      {postRender.map((item) => (
        <article className="prose max-w-5xl mb-16" key={item.id}>
          <header>
            <h1>{item.title}</h1>
            <p className="mb-0">Author: {item.author}</p>
            <p className="mt-0">
              Published Date: {format(new Date(item.date), "MM/dd/yyyy")}
            </p>
            <p>
              Relative Date: {formatRelative(new Date(item.date), new Date())}
            </p>
          </header>
          <p>{item.summary}</p>
          <Link to={item.slug} state={{ details: item }}>
            Read More
          </Link>
        </article>
      ))}
    </>
  );
}
