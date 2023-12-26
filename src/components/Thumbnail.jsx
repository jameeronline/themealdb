import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import classNames from "classnames";

//icons
//import { BiBookmark, BiBookmarkHeart } from "react-icons/bi";

//Icons
import { BiHeart, BiSolidHeart } from "react-icons/bi";

//content
import { ThemeContext } from "components/context/ThemeContext";

//import helper functions
import { formatToUrlString } from "../utils/helperFunc";

export default function Thumbnail({ item }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, handleFavourite } = useContext(ThemeContext);

  useEffect(() => {
    setIsFavourite(JSON.stringify(favourites).includes(item.idMeal));
  }, [favourites, item]);

  const activeClasses = classNames([isFavourite ? "secondary" : "primary"]);

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
        className={`absolute right-4 top-4 flex items-center justify-center z-[1] w-10 h-10 bg-${activeClasses}-500 hover:bg-${activeClasses}-700 rounded-full`}
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
        className="block relative group overflow-hidden transition-all rounded-lg  shadow-xl shadow-slate-200 hover:shadow-2xl dark:shadow-primary-900/0"
      >
        {/*  <!-- Image --> */}
        <figure className="overflow-hidden h-80">
          <LazyLoadImage
            src={item.strMealThumb}
            alt={item.strMeal}
            height={354}
            className="aspect-square w-full transition-all duration-300 scale-100 object-cover group-hover:scale-110 group-hover:-translate-y-6"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="absolute bottom-0 bg-slate-900/80 w-full transition-all duration-300 ease-in-out group-hover:bg-slate-900/60">
          <header className="p-6 flex items-center justify-between">
            <h3 className="text-base font-medium text-white line-clamp-1">
              {item.strMeal}
            </h3>
          </header>
        </div>
      </Link>
    </article>
  );
}

Thumbnail.propTypes = {
  item: PropTypes.object.isRequired,
};
