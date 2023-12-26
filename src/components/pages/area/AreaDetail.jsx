import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import sortBy from "sort-by";

import Spinner from "src/components/common/Spinner";
import Thumbnail from "components/Thumbnail";
import Alert from "components/Alert";

// Icons
import {
  BiGridAlt,
  BiListUl,
  BiArrowBack,
  BiSortAZ,
  BiSortZA,
} from "react-icons/bi";

//Helper functions
import { capitalizeString } from "src/utils/helperFunc";
import { fetcher } from "src/utils/helperFunc";

export default function AreaDetail() {
  const navigate = useNavigate();
  const { cuisineType } = useParams();
  const [isGird, setIsGrid] = useState(true);
  const [isSort, setIsSort] = useState(true);

  const API_URL = `${
    import.meta.env.VITE_VERCEL_API_URL
  }/filter.php?a=${cuisineType}`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert />;
  }

  const handleGridChange = () => {
    const updateGrid = !isGird;
    setIsGrid(updateGrid);
  };

  const handleSort = () => {
    setIsSort((prevVal) => !prevVal);

    if (!isSort) {
      return data.meals.sort(sortBy("-strMeal"));
    } else {
      data.meals.sort(sortBy("strMeal"));
    }
  };

  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex w-10 h-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-primary-50"
              >
                <BiArrowBack className="w-6 h-6 transition-colors duration-300 group-hover:fill-primary-500" />
              </button>
              <span className="flex flex-col lg:flex-row items-baseline lg:gap-2">
                {cuisineType !== "" &&
                  cuisineType != undefined &&
                  capitalizeString(cuisineType)}
                <em className="text-sm font-normal not-italic">
                  ({data.meals.length} meals found)
                </em>
              </span>
            </h1>

            <div className="flex justify-between md:inline-flex gap-4 items-center">
              <button
                onClick={handleGridChange}
                className="flex flex-1 items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700"
              >
                {isGird ? (
                  <>
                    <span className="order-2">List</span>
                    <BiListUl className="w-6 h-6" />
                  </>
                ) : (
                  <>
                    <span className="order-2">Grid</span>
                    <BiGridAlt className="w-6 h-6" />
                  </>
                )}
              </button>

              <button
                onClick={handleSort}
                className="flex flex-1 items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700"
              >
                <span className="order-2">Sort</span>
                <span className="relative only:-mx-5">
                  {isSort ? (
                    <BiSortAZ className="w-6 h-6" />
                  ) : (
                    <BiSortZA className="w-6 h-6" />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {data.meals.map((item) => {
              return (
                <div
                  className={`${
                    isGird
                      ? "col-span-4 md:col-span-4 lg:col-span-3"
                      : "col-span-4 md:col-span-8 lg:col-span-6"
                  } `}
                  key={item.idMeal}
                >
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
