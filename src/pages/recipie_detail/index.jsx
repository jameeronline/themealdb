import { useState, useEffect, useContext } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion";

//react query
import { useMealDetails } from "src/api-services/queries";

import Spinner from "src/components/common/Spinner";
import Alert from "components/Alert";
import Missing from "src/pages/404";
import SEO from "components/common/SEO";
import DetailSlider from "./DetailSlider";

//consume contextAPI
import { ThemeContext } from "src/context/ThemeContext";

//Icons
import {
  BiCategoryAlt,
  BiPurchaseTag,
  BiMap,
  BiBookmark,
  BiBookmarkHeart,
  BiShareAlt,
  BiHeart,
  BiSolidHeart,
  BiPrinter,
  BiArrowBack,
  BiSolidStar,
  BiStar,
  BiPlayCircle,
} from "react-icons/bi";

//Page level components
import Share from "./Share";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Video from "./Video";
import Rating from "src/components/Rating";
import { hasData } from "src/utils/helperFunctions";
//import ShareDropdown from "./ShareDropdown";
//import DropdownBasic from "./DropdownBasic";

export default function RecipeDetail() {
  const [isFavourite, setIsFavourite] = useState(false);

  //const { id } = useParams();
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const { favourites, handleFavourite } = useContext(ThemeContext);

  const { data, isLoading, isError, error, isFetching } = useMealDetails(
    state?.id
  );

  useEffect(() => {
    if (state === null) {
      console.log("no state");
      return;
    }
    setIsFavourite(JSON.stringify(favourites).includes(state.id));
  }, [favourites, state]);

  const handleShare = () => {
    console.log("share");
  };

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert message={error.message} />;
  }

  const isEmpty = hasData(data.meals);
  const isNativeShare = navigator.share;

  return (
    <>
      {!isEmpty && <Alert />}
      {isEmpty && (
        <>
          {data.meals.map((item, index) => (
            <article key={index} className="xl:container mx-auto px-6">
              <SEO
                title={item.strMeal}
                description=""
                name={item.strMeal}
                img={item.strMealThumb}
              />

              {/* <DropdownBasic />

              <ShareDropdown
                title={item.strMeal}
                url={`${document.location.origin}${location.pathname}`}
                hashtags={["meals", "recipies"]}
              /> */}

              <header className="pt-8 pb-6 md:pt-16 md:pb-12">
                {/* Beck button */}

                <button
                  onClick={() => navigate(-1)}
                  className="group inline-flex gap-2 h-10 rounded mb-2 md:mb-6 text-sm items-center justify-center transition-all duration-300 hover:text-primary-400"
                >
                  <BiArrowBack className="w-6 h-6" />
                  <span className="order-2">Back to listing</span>
                </button>
                {/* Heading */}
                <div className="w-full flex flex-col gap-2 items-center justify-between md:flex-row ">
                  <h1 className="w-full text-2xl md:text-4xl lg:text-5xl flex-1 text-typo-950 font-display font-bold ">
                    <span className="leading-tight">{item.strMeal}</span>
                  </h1>

                  <div className="flex gap-2 w-full my-4 md:my-0 md:w-auto">
                    <button
                      onClick={() => window.print()}
                      className="flex flex-1 items-center justify-center p-4 gap-2 md:aspect-square bg-slate-50 md:bg-transparent text-typo-950 transition-colors duration-300 rounded-md hover:text-primary-500 hover:bg-primary-50"
                    >
                      <BiPrinter className="w-6 h-6 md:w-8 md:h-8" />
                      <span className="md:hidden">Print</span>
                    </button>

                    {/* Share - native */}
                    {isNativeShare && (
                      <button
                        onClick={handleShare}
                        className="flex flex-1 items-center justify-center p-4 gap-2 md:aspect-square bg-slate-50 md:bg-transparent text-typo-950 transition-colors duration-300 rounded-md hover:text-primary-500 hover:bg-primary-50"
                      >
                        <BiShareAlt className="w-6 h-6 md:w-8 md:h-8" />
                        <span className="md:hidden">Share</span>
                      </button>
                    )}

                    {/* Share - custom */}
                    {!navigator.share && (
                      <div className="mb-6">
                        <Share
                          title={item.strMeal}
                          url={`${document.location.origin}${location.pathname}`}
                          hashtags={["meals", "recipies"]}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="my-4 md:my-8">
                  <ul className="flex flex-wrap items-center justify-start gap-y-2 gap-x-4 md:gap-10 text-sm">
                    {/* Category */}
                    {item.strCategory !== null && item.strCategory != "" && (
                      <li className="">
                        <Link
                          to={`/category/${item.strCategory.toLowerCase()}`}
                          className="inline-flex items-center gap-2 text-primary-400 hover:underline transition-colors duration-300  hover:text-slate-800"
                        >
                          <BiCategoryAlt className="w-5 h-5" />
                          {item.strCategory}
                        </Link>
                      </li>
                    )}

                    {/* Cusion Type */}
                    {item.strArea !== null && item.strArea != "" && (
                      <li className="">
                        <Link
                          to={`/area/${item.strArea.toLowerCase()}`}
                          className="inline-flex items-center gap-2 text-primary-400 hover:underline transition-colors duration-300  hover:text-slate-800"
                        >
                          <BiMap className="w-5 h-5" />
                          {item.strArea}
                        </Link>
                      </li>
                    )}

                    {/* Favourite */}
                    <li>
                      <button
                        onClick={() =>
                          handleFavourite({
                            idMeal: item.idMeal,
                            strMeal: item.strMeal,
                            strMealThumb: item.strMealThumb,
                          })
                        }
                        className={`inline-flex items-center gap-2 ${
                          isFavourite
                            ? "text-pink-500"
                            : "text-primary-400 hover:underline hover:text-slate-800"
                        }  transition-colors duration-300`}
                      >
                        {isFavourite ? (
                          <>
                            <BiSolidHeart className="w-5 h-5" /> Added to
                            Favourite
                          </>
                        ) : (
                          <>
                            <BiBookmark className="w-5 h-5" /> Add To Favourite
                          </>
                        )}
                      </button>
                    </li>
                    <li>
                      <Rating stars={3} />
                    </li>
                  </ul>
                </div>
                <hr />
              </header>

              {/* Tags */}
              {/* {item.strTags !== null && (
                <ul className="inline-flex gap-2 items-center justify-center text-primary-500 mb-10">
                  {item.strTags.split(",").map((item, index) => (
                    <li key={index}>
                      {item !== "" && (
                        <span className="inline-flex font-sans items-center justify-center gap-1 rounded-full bg-secondary-500 px-2 py-1 text-sm text-white">
                          <BiPurchaseTag />
                          {item}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )} */}

              <div className="">
                {/* Meal Detail Slider */}
                <DetailSlider item={item.strMealThumb} alt={item.strMeal} />

                {/* Thumbnail - Big Image */}
                {/* <div className="mb-8 md:mb-14 relative">
                  <BiPlayCircle className="w-16 h-16 md:w-32 md:h-32 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute fill-white hover:opacity-50 drop-shadow-lg" />
                  <LazyLoadImage
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
                    className="shadow-2xl w-full rounded-xl aspect-[16/8] object-cover"
                  />
                </div> */}

                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 md:gap-8 lg:grid-cols-12 lg:gap-24">
                  <div className="col-span-4 lg:col-span-4 md:order-2">
                    {/* Ingredients Table */}
                    <Ingredients detail={JSON.stringify(data)} />
                  </div>
                  <div className="col-span-4 lg:col-span-8 md:order-1">
                    {/* Instructions List */}
                    <Instructions instructions={item.strInstructions} />
                  </div>
                </div>
                {/* Youtube Preview */}
                {/* {item.strYoutube !== "" && (
                <Video url={item.strYoutube.replace("/watch", "/embed")} />
              )} */}
              </div>
            </article>
          ))}
        </>
      )}
    </>
  );
}
