import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useSWR from "swr";
import { fetcher } from "src/utils/helperFunc";

import { BiRefresh } from "react-icons/bi";

//heler function
import { formatToUrlString } from "src/utils/helperFunc";

//hooks
import useApi from "../../hooks/useAPI";
import useMealsAPI from "src/hooks/useMealAPI";

export default function Banner() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

  const { data, error, isLoading, updateUrl } = useApi(`${API_URL}`);

  //get Random Meals
  const getRandomMeals = () => {
    updateUrl(`${API_URL}?${Math.random()}`);
  };

  return (
    <>
      {error && <p>There is an error</p>}
      {data !== null && Array.isArray(data.meals) && (
        <>
          {data.meals.map((item, index) => (
            <section
              key={index}
              className="grid w-full overflow-hidden grid-cols-1 my-auto mb-16 rounded-2xl bg-secondary-50 md:grid-cols-2 md:gap-6"
            >
              <div className="items-center justify-end hidden col-span-1 md:flex relative">
                <LazyLoadImage
                  className="h-full w-full object-cover aspect-video"
                  src={item.strMealThumb}
                  alt="header image"
                />
                {/* <button
                  onClick={getRandomMeals}
                  className="absolute top-1/2 -mt-7 -left-7 group flex-none inline-flex items-center justify-center w-14 h-14 transition duration-300 rounded-full bg-secondary-500 text-white hover:text-secondary-100 hover:bg-secondary-600 focus:bg-secondary-200 focus:text-secondary-700 "
                >
                  <span className="relative">
                    <span className="sr-only">Button description</span>
                    <BiRefresh className="w-10 h-10 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </button> */}
              </div>
              <div className="flex flex-col justify-center col-span-1 p-16 text-center lg:text-start">
                <div className="flex items-center justify-center mb-4 lg:justify-normal">
                  <h4 className="ml-2 text-sm text-primary">
                    Today handpicked meal
                  </h4>
                </div>
                <h1 className="mb-8 text-slate-800 font-display text-2xl font-extrabold leading-normal lg:text-4xl text-dark-grey-900">
                  {item.strMeal}
                </h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                  Say goodbye to endless hours spent on building templates from
                  scratch. Experience the quickest, most responsive, and
                  trendiest dashboard solution available. Seriously.
                </p>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <Link
                    to={`/recipe-details/${formatToUrlString(item.strMeal)}`}
                    state={{ id: item.idMeal }}
                    className="flex items-center py-4 text-sm font-bold text-white px-7 bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-secondary-100 transition duration-300 rounded"
                  >
                    Meal Details
                  </Link>
                  {/* <Link
                    to="search"
                    className="flex items-center py-4 text-sm font-medium px-7 border border-secondary-500 text-secondary-800 hover:text-dark-grey-900 transition duration-300 rounded"
                  >
                    Find Meals
                  </Link> */}
                </div>
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
}
