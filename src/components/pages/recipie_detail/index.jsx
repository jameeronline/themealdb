import { useState, useEffect, useContext, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

import Spinner from "../../Spinner";
import Alert from "../../AlertError";
import Missing from "../404";

import { fetchMealDetails } from "../../../utils/dataLayer";

//consume contextAPI
import { ThemeContext } from "../../context/ThemeContext";

import { BiCategoryAlt, BiPurchaseTag, BiMap } from "react-icons/bi";
import { BiBookmark, BiBookmarkHeart, BiShareAlt } from "react-icons/bi";

export default function RecipeDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [mealDetail, setMealDetail] = useState(null);
  const [showError, setShowError] = useState("");
  const { state } = useLocation();
  const [isFavourite, setIsFavourite] = useState(false);

  const { favourites, handleFavourite } = useContext(ThemeContext);

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      setIsLoading(true);

      console.log(state);

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
  }, [favourites]);

  // const handleFavourite = () => {
  //   console.log("fav");
  // };

  const handleShare = () => {
    console.log("share");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!Array.isArray(mealDetail) && showError !== "" && (
        //<Alert message={showError} />
        <Missing />
      )}
      {Array.isArray(mealDetail) && (
        <>
          {mealDetail.map((item, index) => (
            <article className="grid max-w-5xl mx-auto font-mono" key={index}>
              <header className=" mb-10 text-center  ">
                <h1 className="text-6xl font-semibold mb-6">{item.strMeal}</h1>

                {/* Tags */}
                {item.strTags !== null && (
                  <div className="inline-flex gap-2 items-center justify-center text-primary-500">
                    {item.strTags.split(",").map((item, index) => (
                      <span key={index}>
                        {item !== "" && (
                          <span className="inline-flex font-sans items-center justify-center gap-1 rounded-full bg-secondary-500 px-2 py-1 text-sm text-white">
                            <BiPurchaseTag />
                            {item}
                            <span className="sr-only"> new emails</span>
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
                        <BiBookmarkHeart className="w-6 h-6" />
                      ) : (
                        <BiBookmark className="w-6 h-6" />
                      )}
                      Add to Favourite
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleShare}
                      className="inline-flex gap-2 text-primary-500 hover:text-slate-800 transition-colors duration-300"
                    >
                      <BiShareAlt className="w-6 h-6" />
                      Share it
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center mb-10 relative">
                <LazyLoadImage
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
                />
              </div>

              <div>
                {item.strInstructions != null && (
                  <>
                    <h4 className="text-lg font-bold mb-6">Instuctions:</h4>
                    <ol className="list-decimal space-y-4 list-inside">
                      {item.strInstructions.split("\r\n").map((item, index) => (
                        <Fragment key={index}>
                          {item.length > 6 && (
                            <li>
                              <p>{item}</p>
                            </li>
                          )}
                        </Fragment>
                      ))}
                    </ol>
                  </>
                )}
              </div>

              {/* {item.strYoutube !== "" && (
                <div className="m-10">
                  <h4 className="text-lg font-bold mb-4">Preview:</h4>
                  <div className="mb-10">
                    <iframe
                      className="w-full aspect-video"
                      src={item.strYoutube.replace("/watch", "/embed")}
                    ></iframe>
                  </div>
                </div>
              )} */}
            </article>
          ))}
        </>
      )}
    </>
  );
}
