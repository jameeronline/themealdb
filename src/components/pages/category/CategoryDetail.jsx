import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

import Spinner from "components/Spinner";
import Alert from "components/Alert";
import RecipieThumb from "components/Thumbnail";

// Icons
import { BiGridAlt, BiListUl } from "react-icons/bi";

//Helper functions
import { capitalizeString } from "src/utils/helperFunc";

import Select from "react-select";

//hooks
import useApi from "components/hooks/useAPI";

//Context
import { DataContext } from "components/context/DataContext";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function CategoryDetail() {
  const navigate = useNavigate();
  const { ingredients } = useContext(DataContext);

  const { categoryType } = useParams();
  const [isGird, setIsGrid] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const API_URL = `${
    import.meta.env.VITE_API_URL
  }/filter.php?c=${categoryType}`;

  const { data, error, isLoading, updateUrl } = useApi(API_URL);

  useEffect(() => {
    updateUrl(API_URL);
  }, [updateUrl]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleGridChange = () => {
    const updateGrid = !isGird;
    setIsGrid(updateGrid);
  };

  let options = ingredients.map(function (ingredient) {
    return { value: ingredient.strIngredient, label: ingredient.strIngredient };
  });

  //check data is empty
  const isEmpty =
    data !== null && !Array.isArray(data.meals) && data.meals.length < 0;

  return (
    <>
      {error !== null && <Alert message={error.message} />}
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold ">
              {categoryType !== "" &&
                categoryType != undefined &&
                capitalizeString(categoryType)}
            </h1>

            <Select
              options={options}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
            />
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
