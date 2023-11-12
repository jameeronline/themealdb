import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Spinner from "../../Spinner";

import { fetchMealDetails } from "../../../utils/dataLayer";

import { BiCategoryAlt, BiPurchaseTag, BiMap } from "react-icons/bi";

export default function RecipeDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealDetail, setMealDetail] = useState(null);
  // const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      const mealDetails = await fetchMealDetails(state.id);
      setIsLoading(false);
      setMealDetail(mealDetails[0]);
    };

    getAPIData();
  }, [state.id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid max-w-5xl mx-auto font-mono">
      <h1 className="text-6xl text-center mb-10 font-semibold">
        {mealDetail.strMeal}
      </h1>

      <div className="mb-10">
        <ul className="flex items-center justify-center gap-10">
          {mealDetail.strCategory !== null && (
            <li className="inline-flex gap-1 items-center">
              <BiCategoryAlt />
              <Link
                to={`/category/${mealDetail.strCategory.toLowerCase()}`}
                className="text-emerald-500 hover:underline"
              >
                {mealDetail.strCategory}
              </Link>
            </li>
          )}
          {mealDetail.strArea !== null && (
            <li className="inline-flex gap-1 items-center">
              <BiMap />
              <Link to="/" className="text-emerald-500 hover:underline">
                {mealDetail.strArea}
              </Link>
            </li>
          )}
          {mealDetail.strTags !== null && (
            <li className="inline-flex gap-1 items-center">
              <BiPurchaseTag />
              {mealDetail.strTags.split(",").map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-emerald-500 hover:underline"
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
          src={mealDetail.strMealThumb}
          alt={mealDetail.strMeal}
          className="rounded-tl-[120px] rounded-br-[120px] shadow-2xl"
        />
      </div>
      <div>
        {mealDetail.strInstructions != null && (
          <>
            <h4 className="text-lg font-bold mb-6">Instuctions:</h4>
            <ol className="list-decimal space-y-4">
              {mealDetail.strInstructions.split("\r\n").map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>

      {mealDetail.strYoutube !== "" && (
        <div className="m-10">
          <h4 className="text-lg font-bold mb-4">Preview:</h4>
          <div className="mb-10">
            <iframe
              className="w-full aspect-video"
              src={mealDetail.strYoutube.replace("/watch", "/embed")}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
