import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import Spinner from "src/components/common/Spinner";
import Alert from "components/Alert";
import Thumbnail from "components/Thumbnail";

// Icons
import { BiGridAlt, BiListUl } from "react-icons/bi";

//Helper functions
import { capitalizeString } from "src/utils/helperFunc";
import { fetcher } from "src/utils/helperFunc";

export default function CategoryDetail() {
  const navigate = useNavigate();

  const { categoryType } = useParams();
  const [isGird, setIsGrid] = useState(true);

  const API_URL = `${
    import.meta.env.VITE_API_URL
  }/filter.php?c=${categoryType}`;

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

  //check data is empty
  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
              {categoryType !== "" &&
                categoryType != undefined &&
                capitalizeString(categoryType)}
              <span className="text-sm font-normal">
                ({data.meals.length} meals found)
              </span>
            </h1>

            <button onClick={handleGridChange}>
              {isGird ? (
                <BiListUl className="w-8 h-8" />
              ) : (
                <BiGridAlt className="w-8 h-8" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {data.meals.map((item) => {
              return (
                <div
                  className={`${isGird ? "col-span-4" : "col-span-6"} `}
                  key={item.idMeal}
                >
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </>
  );
}

// export const categoryDetailLoader = async ({ params }) => {
//   const { categoryType } = params;
//   try {
//     const response = await fetch(
//       `www.themealdb.com/api/json/v1/1/filter.php?c=${categoryType}`
//     );
//     return await response.json();
//   } catch (e) {
//     console.log(e.message);
//   }
// };
