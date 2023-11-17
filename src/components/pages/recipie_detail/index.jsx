import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

import Spinner from "../../Spinner";
import Alert from "../../AlertError";

import { fetchMealDetails } from "../../../utils/dataLayer";

import { BiCategoryAlt, BiPurchaseTag, BiMap } from "react-icons/bi";
import { BiBookmark, BiBookmarkHeart, BiBookmarkPlus } from "react-icons/bi";

export default function RecipeDetail({ mealInfo }) {
  const [isLoading, setIsLoading] = useState(false);
  const [mealDetail, setMealDetail] = useState(null);
  // const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      setIsLoading(true);

      const mealDetails = await fetchMealDetails(state.id);
      setIsLoading(false);
      setMealDetail(mealDetails);
    };

    getAPIData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!Array.isArray(mealDetail) && <Alert />}
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
                      <span
                        key={index}
                        className="inline-flex font-sans items-center justify-center gap-1 rounded bg-secondary-500 px-2 text-sm text-white"
                      >
                        <BiPurchaseTag />
                        {item}
                        <span className="sr-only"> new emails</span>
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
                </ul>
              </div>

              <div className="flex justify-center mb-10">
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
                    <ol className="list-decimal space-y-4">
                      {item.strInstructions.split("\r\n").map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>

              {item.strYoutube !== "" && (
                <div className="m-10">
                  <h4 className="text-lg font-bold mb-4">Preview:</h4>
                  <div className="mb-10">
                    <iframe
                      className="w-full aspect-video"
                      src={item.strYoutube.replace("/watch", "/embed")}
                    ></iframe>
                  </div>
                </div>
              )}
            </article>
          ))}
        </>
      )}
    </>
  );
}
