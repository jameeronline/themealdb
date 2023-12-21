import { useState, useEffect, useContext } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useSWR from "swr";
import { fetcher } from "src/utils/helperFunc";

import Spinner from "src/components/common/Spinner";
import Alert from "components/Alert";
import Missing from "components/pages/404";
import SEO from "components/common/SEO";

import { fetchMealDetails } from "src/utils/dataLayer";

//consume contextAPI
import { ThemeContext } from "components/context/ThemeContext";

//Icons
import {
  BiCategoryAlt,
  BiPurchaseTag,
  BiMap,
  BiBookmark,
  BiBookmarkHeart,
  BiShareAlt,
} from "react-icons/bi";

//Page level components
import Share from "./Share";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Video from "./Video";

export default function RecipeDetail() {
  //const [isLoading, setIsLoading] = useState(false);
  //const [mealDetail, setMealDetail] = useState(null);
  //const [showError, setShowError] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  //const { id } = useParams();
  const { state } = useLocation();
  const location = useLocation();

  const { favourites, handleFavourite } = useContext(ThemeContext);

  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}/lookup.php?i=${
    state.id
  }`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  useEffect(() => {
    if (state === null) {
      console.log("no state");
      return;
    }
    setIsFavourite(JSON.stringify(favourites).includes(state.id));
  }, [favourites, state]);

  // useEffect(() => {
  //   //Load Data from API
  //   const getAPIData = async () => {
  //     setIsLoading(true);

  //     if (state === null) {
  //       setIsLoading(false);
  //       setShowError("Please check your meals information");
  //       return;
  //     }

  //     const { data, loading, showError } = await fetchMealDetails(state.id);
  //     setIsLoading(loading);
  //     setMealDetail(data);
  //     setShowError(showError);
  //     console.log(data);
  //   };

  //   getAPIData();
  // }, [state]);

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
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          {data.meals.map((item, index) => (
            <article className="grid max-w-5xl mx-auto" key={index}>
              <SEO
                title={item.strMeal}
                description=""
                name={item.strMeal}
                img={item.strMealThumb}
              />

              <header className="mb-10 text-center">
                <h1 className="text-6xl font-display font-semibold leading-tight">
                  {item.strMeal}
                </h1>
              </header>

              {/* Tags */}
              {item.strTags !== null && (
                <div className="inline-flex gap-2 items-center justify-center text-primary-500 mb-10">
                  {item.strTags.split(",").map((item, index) => (
                    <span key={index}>
                      {item !== "" && (
                        <span className="inline-flex font-sans items-center justify-center gap-1 rounded-full bg-secondary-500 px-2 py-1 text-sm text-white">
                          <BiPurchaseTag />
                          {item}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              <div className="mb-10">
                <ul className="flex items-center justify-center gap-10">
                  {data.meals.strCategory !== null && (
                    <li className="">
                      <Link
                        to={`/category/${item.strCategory.toLowerCase()}`}
                        className="inline-flex gap-2 text-primary-500 hover:text-slate-800 transition-colors duration-300"
                      >
                        <BiCategoryAlt className="w-6 h-6" />
                        {item.strCategory}
                      </Link>
                    </li>
                  )}
                  {item.strArea !== null && (
                    <li className="">
                      <Link
                        to={`/area/${item.strArea.toLowerCase()}`}
                        className="inline-flex gap-2 text-primary-500 hover:text-slate-800 transition-colors duration-300"
                      >
                        <BiMap className="w-6 h-6" />
                        {item.strArea}
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={() =>
                        handleFavourite({
                          idMeal: item.idMeal,
                          strMeal: item.strMeal,
                          strMealThumb: item.strMealThumb,
                        })
                      }
                      className={`inline-flex gap-2 ${
                        isFavourite
                          ? "text-secondary-600"
                          : "text-primary-500 hover:text-slate-800"
                      }  transition-colors duration-300`}
                    >
                      {isFavourite ? (
                        <>
                          <BiBookmarkHeart className="w-6 h-6" /> Remove from
                          Favourite
                        </>
                      ) : (
                        <>
                          <BiBookmark className="w-6 h-6" /> Add To Favourite
                        </>
                      )}
                    </button>
                  </li>
                  {/* Share - native */}
                  {navigator.canShare() && (
                    <li>
                      <button
                        onClick={handleShare}
                        className="inline-flex gap-2 text-primary-500 hover:text-slate-800 transition-colors duration-300"
                      >
                        <BiShareAlt className="w-6 h-6" />
                        Share it
                      </button>
                    </li>
                  )}
                </ul>
              </div>

              {/* Share - custom */}
              {!navigator.canShare() && (
                <div className="mb-6">
                  <Share
                    title={item.strMeal}
                    url={`${document.location.origin}${location.pathname}`}
                    hashtags={["meals", "recipies"]}
                  />
                </div>
              )}

              {/* Thimbnail - Big Image */}
              <div className="flex justify-center mb-10 relative">
                <LazyLoadImage
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
                />
              </div>

              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-8">
                  {/* Instructions List */}
                  <Instructions instructions={item.strInstructions} />
                </div>
                <div className="col-span-4 lg:col-span-4">
                  {/* Ingredients Table */}
                  <Ingredients detail={JSON.stringify(data)} />
                </div>
              </div>
              {/* Youtube Preview */}
              {/* {item.strYoutube !== "" && (
                <Video url={item.strYoutube.replace("/watch", "/embed")} />
              )} */}
            </article>
          ))}
        </>
      )}
    </>
  );
}
