import { useState, useEffect, useContext } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion";

import useSWR from "swr";
import { fetcher } from "src/utils/helperFunc";

import Spinner from "src/components/common/Spinner";
import Alert from "components/Alert";
import Missing from "src/pages/404";
import SEO from "components/common/SEO";

//import { fetchMealDetails } from "src/utils/dataLayer";

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
} from "react-icons/bi";

//Page level components
import Share from "./Share";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Video from "./Video";
//import ShareDropdown from "./ShareDropdown";
//import DropdownBasic from "./DropdownBasic";

export default function RecipeDetail() {
  const [isFavourite, setIsFavourite] = useState(false);

  //const { id } = useParams();
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const { favourites, handleFavourite } = useContext(ThemeContext);

  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}/lookup.php?i=${
    state?.id
  }`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher, {
    revalidateOnFocus: true,
  });

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

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert />;
  }

  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && <Alert message="There is no recipies available." />}
      {!isEmpty && (
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

              <header className="pt-16 pb-12">
                {/* Beck button */}

                <button
                  onClick={() => navigate(-1)}
                  className="group inline-flex gap-2 h-10 rounded mb-6 text-sm items-center justify-center transition-all duration-300 hover:text-primary-400"
                >
                  <BiArrowBack className="w-6 h-6 group-hover:fill-primary-400" />
                  <span className="order-2">Back to listing</span>
                </button>
                {/* Heading */}
                <div className="w-full flex flex-col gap-2 items-center justify-between md:flex-row ">
                  <h1 className="text-2xl  text-typo-950 font-display font-bold md:text-5xl">
                    <span className="leading-tight">{item.strMeal}</span>
                  </h1>

                  <div className="flex gap-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center p-4 gap-2 aspect-square text-typo-950 transition-colors duration-300 rounded-md hover:text-primary-500 hover:bg-primary-50"
                    >
                      <BiPrinter className="w-8 h-8" />
                    </button>

                    {/* Share - native */}
                    {navigator.share && (
                      <button
                        onClick={handleShare}
                        className="inline-flex items-center p-4 gap-2 aspect-square text-typo-950 transition-colors duration-300 rounded-md hover:text-primary-500 hover:bg-primary-50"
                      >
                        <BiShareAlt className="w-8 h-8" />
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

                <div className="my-8">
                  <ul className="flex items-center justify-start gap-10 text-sm">
                    {/* Category */}
                    {item.strCategory !== null && item.strCategory != "" && (
                      <li className="">
                        <Link
                          to={`/category/${item.strCategory.toLowerCase()}`}
                          className="inline-flex items-center gap-2 text-primary-400 hover:underline transition-colors duration-300  hover:text-slate-800"
                        >
                          <BiCategoryAlt className="w-4 h-4" />
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
                          <BiMap className="w-4 h-4" />
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
                            ? "text-secondary-600"
                            : "text-primary-400 hover:underline hover:text-slate-800"
                        }  transition-colors duration-300`}
                      >
                        {isFavourite ? (
                          <>
                            <BiSolidHeart className="w-4 h-4" /> Remove from
                            Favourite
                          </>
                        ) : (
                          <>
                            <BiBookmark className="w-4 h-4" /> Add To Favourite
                          </>
                        )}
                      </button>
                    </li>
                    <li>
                      <ul className="inline-flex gap-2">
                        <li>
                          <BiSolidStar className="w-5 h-5 fill-primary-400" />
                        </li>
                        <li>
                          <BiSolidStar className="w-5 h-5 fill-primary-400" />
                        </li>
                        <li>
                          <BiSolidStar className="w-5 h-5 fill-primary-400" />
                        </li>
                        <li>
                          <BiSolidStar className="w-5 h-5 fill-primary-400" />
                        </li>
                        <li>
                          <BiStar className="w-5 h-5 fill-typo-400" />
                        </li>
                      </ul>
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
                {/* Thimbnail - Big Image */}
                <div className="mb-14 relative">
                  <LazyLoadImage
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    // className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
                    className="shadow-2xl w-full rounded-xl aspect-[16/8] object-cover"
                  />
                </div>

                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 md:gap-8 lg:grid-cols-12 lg:gap-24">
                  <div className="col-span-4 lg:col-span-8">
                    {/* Instructions List */}
                    <Instructions instructions={item.strInstructions} />
                  </div>
                  <div className="col-span-4 lg:col-span-4 ">
                    {/* Ingredients Table */}
                    <Ingredients detail={JSON.stringify(data)} />
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
