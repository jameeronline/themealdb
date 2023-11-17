import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

import { BiBookmark, BiBookmarkHeart, BiBookmarkPlus } from "react-icons/bi";

//import helper functions
import { formatToUrlString } from "../utils/helperFunc";

export default function RecipieThumb({ item }) {
  return (
    <>
      <Link
        to={`/details/${formatToUrlString(item.strMeal)}`}
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
            <BiBookmark className="w-6 h-6 text-white" />
          </header>
        </div>
      </Link>
    </>
  );
}

RecipieThumb.propTypes = {
  item: PropTypes.object.isRequired,
};
