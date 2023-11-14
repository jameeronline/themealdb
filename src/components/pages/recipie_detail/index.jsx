import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Spinner from "../../Spinner";
import Alert from "../../AlertError";

import { fetchMealDetails } from "../../../utils/dataLayer";

import { BiCategoryAlt, BiPurchaseTag, BiMap } from "react-icons/bi";

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
              <h1 className="text-6xl text-center mb-10 font-semibold">
                {item.strMeal}
              </h1>

              <div className="mb-10">
                <ul className="flex items-center justify-center gap-10">
                  {mealDetail.strCategory !== null && (
                    <li className="inline-flex gap-1 items-center">
                      <BiCategoryAlt />
                      <Link
                        to={`/category/${item.strCategory.toLowerCase()}`}
                        className="text-primary-500 hover:underline"
                      >
                        {item.strCategory}
                      </Link>
                    </li>
                  )}
                  {item.strArea !== null && (
                    <li className="inline-flex gap-1 items-center">
                      <BiMap />
                      <Link
                        to={`/area/${item.strArea.toLowerCase()}`}
                        className="text-primary-500 hover:underline"
                      >
                        {item.strArea}
                      </Link>
                    </li>
                  )}
                  {item.strTags !== null && (
                    <li className="inline-flex gap-1 items-center">
                      <BiPurchaseTag />
                      {item.strTags.split(",").map((item, index) => (
                        <a
                          href="#"
                          key={index}
                          className="text-primary-500 hover:underline"
                        >
                          {item}
                        </a>
                      ))}
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex justify-center mb-10">
                <img
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
