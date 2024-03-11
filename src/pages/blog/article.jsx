import React from "react";
import { Link } from "react-router-dom";
import { format, formatRelative } from "date-fns";

function Article({ item }) {
  return (
    <article className="prose max-w-5xl mb-16" key={item.id}>
      <header>
        <h1>{item.title}</h1>
        <p className="mb-0">
          Author: <strong>{item.author}</strong>
        </p>
        <p className="mt-0">
          Published Date:{" "}
          <strong>{format(new Date(item.date), "MM/dd/yyyy")}</strong>
        </p>
        {/* <p>
                Relative Date:{" "}
                <strong>
                  {formatRelative(new Date(item.date), new Date())}
                </strong>
              </p> */}
      </header>
      <p>{item.summary}</p>
      <Link
        to={item.slug}
        state={{ details: item }}
        className="text-primary-500"
      >
        Read More
      </Link>
    </article>
  );
}

export default Article;
