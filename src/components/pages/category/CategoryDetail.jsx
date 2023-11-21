import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../../Spinner";
import RecipieThumb from "../../Thumbnail";

import { BiGridAlt, BiListUl } from "react-icons/bi";

import { fetchFilteredMeals } from "../../../utils/dataLayer";

//Helper functions
import { capitalizeString } from "../../../utils/helperFunc";
import Alert from "../../AlertError";

export default function CategoryDetail() {
  const navigate = useNavigate();
  const { categoryType } = useParams();
  const [items, setItems] = useState([]);
  const [isGird, setIsGrid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState("");

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      setIsLoading(true);
      const { data, errorMsg } = await fetchFilteredMeals(categoryType, "c");
      setIsLoading(false);
      setShowError(errorMsg);
      setItems(data);
    };

    getAPIData();
  }, [categoryType]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleGridChange = () => {
    const updateGrid = !isGird;
    setIsGrid(updateGrid);
  };

  return (
    <>
      {showError !== "" && <Alert message={showError} />}
      {!Array.isArray(items) && (
        <Alert message="There is no meals available on this category" />
      )}
      {items !== null && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold ">
              {categoryType !== "" &&
                categoryType != undefined &&
                capitalizeString(categoryType)}
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
            {items.map((item) => {
              return (
                <div
                  className={`${isGird ? "col-span-4" : "col-span-6"} `}
                  key={item.idMeal}
                >
                  <RecipieThumb item={item} />
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
