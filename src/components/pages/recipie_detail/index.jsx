import { useState, useEffect, useContext } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Spinner from "../../Spinner";
import Alert from "../../Alert";
import Missing from "../404";

import { fetchMealDetails } from "../../../utils/dataLayer";

//consume contextAPI
import { ThemeContext } from "../../context/ThemeContext";

import { BiCategoryAlt, BiPurchaseTag, BiMap } from "react-icons/bi";
import { BiBookmark, BiBookmarkHeart, BiShareAlt } from "react-icons/bi";
import { useDocumentTitle } from "@uidotdev/usehooks";

//Page level components
import Share from "./Share";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Video from "./Video";

export default function RecipeDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [mealDetail, setMealDetail] = useState(null);
  const [showError, setShowError] = useState("");
  const { state } = useLocation();
  const [isFavourite, setIsFavourite] = useState(false);
  const { id } = useParams();
  let ingredientLists = [];

  const location = useLocation();
  const { favourites, handleFavourite } = useContext(ThemeContext);

  //update document title
  // useDocumentTitle(
  //   `${capitalizeString(id).replaceAll("-", " ")} | The Meal DB`
  // );

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      setIsLoading(true);

      if (state === null) {
        setIsLoading(false);
        setShowError("Please check your meals information");
        return;
      }

      const { data, loading, showError } = await fetchMealDetails(state.id);
      setIsLoading(loading);
      setMealDetail(data);
      setShowError(showError);
    };

    getAPIData();
  }, [state]);

  useEffect(() => {
    if (state === null) {
      return;
    }
    setIsFavourite(JSON.stringify(favourites).includes(state.id));
  }, [favourites, state]);

  // const handleFavourite = () => {
  //   console.log("fav");
  // };

  // if (mealDetail !== null) {
  //   ingredientLists = mapIngredientsAndMeasures(JSON.stringify(mealDetail));
  // }

  const handleShare = () => {
    console.log("share");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* {!Array.isArray(mealDetail) && showError !== "" && (
        //<Alert message={showError} />
        <Missing />
      )} */}
      {mealDetail !== null && Array.isArray(mealDetail.meals) && (
        <>
          {mealDetail.meals.map((item, index) => (
            <article className="grid max-w-5xl mx-auto font-mono" key={index}>
              <Helmet>
                <title>{item.strMeal} | The Meal DB</title>
                <meta
                  name="description"
                  content="Beginner friendly page for learning React Helmet."
                />
                <meta property="og:title" content={item.strMeal} />
                <meta property="og:type" content="article" />
                <meta
                  property="og:url"
                  content={`${document.location.origin}${location.pathname}`}
                />
                <meta property="og:image" content={item.strMealThumb} />
              </Helmet>

              <header className=" mb-10 text-center">
                <h1 className="text-6xl font-semibold mb-6 leading-tight">
                  {item.strMeal}
                </h1>

                {/* Tags */}
                {item.strTags !== null && (
                  <div className="inline-flex gap-2 items-center justify-center text-primary-500">
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
              </header>

              <div className="mb-10">
                <ul className="flex items-center justify-center gap-10">
                  {mealDetail.strCategory !== null && (
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
                  <Ingredients detail={JSON.stringify(mealDetail)} />
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
