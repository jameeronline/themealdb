import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//import helper functions
import { formatToUrlString } from "../utils/helperFunc";

export default function RecipieThumb({ item }) {
  return (
    <>
      <article className="relative group overflow-hidden transition-all rounded-lg bg-white text-slate-500 shadow-xl shadow-slate-200 hover:shadow-2xl">
        {/*  <!-- Image --> */}
        <figure className="overflow-hidden h-80">
          <LazyLoadImage
            src={item.strMealThumb}
            alt={item.strMeal}
            height={354}
            className="aspect-square w-full transition-all duration-300 scale-100 group-hover:scale-110 group-hover:-translate-y-6"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="absolute -bottom-16 bg-slate-900/80 w-full transition-all duration-300 ease-in-out group-hover:bg-slate-900/60 group-hover:bottom-0">
          <div className="p-6">
            <header>
              <h3 className="text-xl font-medium text-white line-clamp-1">
                {item.strMeal}
              </h3>
            </header>
          </div>
          {/*  <!-- Action base sized basic button --> */}
          <div className="flex justify-end p-6 pt-0">
            <Link
              to={`/details/${formatToUrlString(item.strMeal)}`}
              state={{ id: item.idMeal }}
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

RecipieThumb.propTypes = {
  item: PropTypes.object.isRequired,
};
