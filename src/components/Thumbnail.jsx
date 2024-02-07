import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import classNames from "classnames";

//components
import Rating from "./Rating";
import Avatar from "./Avatar";

//Icons
import { BiHeart, BiSolidHeart, BiStar, BiSolidStar } from "react-icons/bi";

//content
import { ThemeContext } from "src/context/ThemeContext";

//import helper functions
import { formatToUrlString } from "../utils/helperFunc";

export default function Thumbnail({ item }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, handleFavourite } = useContext(ThemeContext);

  useEffect(() => {
    setIsFavourite(JSON.stringify(favourites).includes(item.idMeal));
  }, [favourites, item]);

  const activeClasses = classNames([
    isFavourite
      ? "bg-pink-500 hover:bg-pink-700"
      : "bg-slate-800/50 hover:bg-slate-900/50",
  ]);

  return (
    <article className="relative">
      <button
        onClick={() =>
          handleFavourite({
            idMeal: item.idMeal,
            strMeal: item.strMeal,
            strMealThumb: item.strMealThumb,
          })
        }
        className={`absolute right-4 top-4 flex items-center justify-center z-[1] w-10 h-10 rounded-full ${activeClasses} `}
      >
        {isFavourite ? (
          <BiSolidHeart className="w-6 h-6 text-white" />
        ) : (
          <BiHeart className="w-6 h-6 text-white" />
        )}
      </button>
      <Link
        to={`/recipe-details/${formatToUrlString(item.strMeal)}`}
        state={{ id: item.idMeal }}
        className="block relative group overflow-hidden transition-all"
        // className="block relative group overflow-hidden transition-all rounded-lg  shadow-xl shadow-slate-200 hover:shadow-2xl dark:shadow-primary-900/0"
      >
        {/*  <!-- Image --> */}
        <figure className="overflow-hidden rounded-md">
          <LazyLoadImage
            src={item.strMealThumb}
            alt={item.strMeal}
            height={null}
            className="w-full aspect-[4/3] transition-all duration-300 shadow-xl scale-100 object-cover hover:scale-105"
          />
        </figure>
        {/*  <!-- Body--> */}
        <figcaption className="w-full flex items-start gap-4 pt-4 transition-all duration-300 ease-in-out group-hover:text-primary-500">
          <Avatar
            className="w-10 h-10"
            item={Math.floor(Math.random() * 8) + 1}
          />
          <div>
            <header className="flex items-center justify-between">
              <h3 className="font-medium">{item.strMeal}</h3>
            </header>
            <Rating stars={Math.floor(Math.random() * 5) + 1} />
          </div>
        </figcaption>
      </Link>
    </article>
  );
}

Thumbnail.propTypes = {
  item: PropTypes.object.isRequired,
};
