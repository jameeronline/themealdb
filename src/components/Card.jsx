// import ShowModalDialog from "./ShowModalDialog";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { formatToUrlString } from "../utils/helperFunc";

const Card = ({ item }) => {
  return (
    <Link
      className="relative group overflow-hidden"
      to={`/category/${formatToUrlString(item.strCategory)}`}
    >
      <figure className="overflow-hidden aspect-square rounded-full bg-primary-50 flex items-center justify-center">
        <LazyLoadImage
          src={item.strCategoryThumb}
          alt={item.strCategory}
          className="transition-all duration-300 scale-90 group-hover:scale-100 group-hover:-translate-y-6"
        />
      </figure>
      <div className="text-center">
        <header className="p-6">
          <h3 className="text-xl font-medium line-clamp-1">
            {item.strCategory}
          </h3>
        </header>
      </div>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
