// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import ShowModalDialog from "./ShowModalDialog";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { formatToUrlString } from "../utils/helperFunc";

import PropTypes from "prop-types";

const RecipieCard = ({ item }) => {
  return (
    <Link
      className="relative group overflow-hidden"
      to={`/category/${formatToUrlString(item.strCategory)}`}
    >
      {/*  <!-- Image --> */}
      <figure className="overflow-hidden aspect-square rounded-full bg-emerald-50 flex items-center justify-center">
        <LazyLoadImage
          src={item.strCategoryThumb}
          alt={item.strCategory}
          className="transition-all duration-300 scale-100 group-hover:scale-105 group-hover:-translate-y-6"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="text-center">
        <div className="p-6">
          <header>
            <h3 className="text-xl font-medium line-clamp-1">
              {item.strCategory}
            </h3>
          </header>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        {/* <div className="flex justify-end p-6 pt-0">
          <Link
            to={`/details/${formatToUrlString(item.strMeal)}`}
            state={{ id: item.idMeal }}
            className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>View Details</span>
          </Link>
        </div> */}
      </div>
    </Link>
  );
};

RecipieCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RecipieCard;
