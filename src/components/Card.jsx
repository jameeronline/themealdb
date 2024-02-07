import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatToUrlString } from "src/utils/helperFunc";

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
          className="transition-all duration-300 scale-[1.5] group-hover:scale-[1.8] translate-y-10"
        />
      </figure>
      <header className="py-3 text-center">
        <h3 className="text-xl font-display font-medium line-clamp-1 group-hover:text-primary-500 transition-all duration-300 ">
          {item.strCategory}
        </h3>
      </header>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
