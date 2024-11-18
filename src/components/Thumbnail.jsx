import { useContext, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import classNames from "classnames";

//config
import configs from "src/configuration/config";

//store
import { useFavouriteStore } from "src/store/favourite-store";

//components
import Rating from "./Rating";
import Avatar from "./Avatar";
import { ToastContainer, toast } from "react-toastify";

//Icons
import { BiHeart, BiSolidHeart } from "react-icons/bi";

//content
//import { ThemeContext } from "src/context/ThemeContext";

//import helper functions
import { formatToUrlString, cn } from "../utils/helperFunctions";

// FavouriteButton Component
const FavouriteButton = ({ isFavourite, handleFavouriteClick }) => {
  return (
    <button
      onClick={handleFavouriteClick}
      className={cn(
        `absolute right-4 top-4 flex items-center justify-center z-[1] w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-900/50`,
        isFavourite && "bg-primary-500 hover:bg-primary-700"
      )}
    >
      {isFavourite ? (
        <BiSolidHeart className="w-6 h-6 text-white" />
      ) : (
        <BiHeart className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

const Thumbnail = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const favouritesList = useFavouriteStore((state) => state.favourites);
  const setFavourite = useFavouriteStore((state) => state.addFavourites);

  useEffect(() => {
    setIsFavourite(JSON.stringify(favouritesList).includes(item.idMeal));
  }, [favouritesList, item]);

  const handleFavouriteClick = () => {
    setFavourite({
      idMeal: item.idMeal,
      strMeal: item.strMeal,
      strMealThumb: item.strMealThumb,
    });
    //toast("Added to favourites");
  };

  return (
    <article className="relative">
      <FavouriteButton
        isFavourite={isFavourite}
        handleFavouriteClick={handleFavouriteClick}
      />
      <Link
        to={`${configs.details}/${formatToUrlString(item.strMeal)}`}
        state={{ id: item.idMeal }}
        className="block relative group overflow-hidden transition-all"
        title={item.strMeal}
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
        <figcaption className="w-full flex items-center gap-4 pt-4 transition-all duration-300 ease-in-out group-hover:text-primary-500">
          <Avatar
            className="w-10 h-10"
            // item={Math.floor(Math.random() * 8) + 1}
            item={6}
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-medium line-clamp-1">{item.strMeal}</h3>
            {/* <Rating stars={Math.floor(Math.random() * 5) + 1} /> */}
            <Rating stars={3} />
          </div>
        </figcaption>
      </Link>
      <ToastContainer />
    </article>
  );
};

Thumbnail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Thumbnail;
