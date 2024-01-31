import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import helper functions
import {
  mapIngredientsAndMeasures,
  capitalizeString,
} from "src/utils/helperFunc";

export default function Ingredients({ detail }) {
  const [ingredientList, setIngredientList] = useState(null);
  useEffect(() => {
    setIngredientList(mapIngredientsAndMeasures(detail));
  }, [detail]);

  return (
    <>
      {ingredientList !== null && ingredientList.length > 0 && (
        <>
          <h4 className="text-3xl font-display font-bold mb-8">Ingredients</h4>
          <div className="w-full text-left rounded bg-secondary-50 p-4">
            <ul className="flex flex-col">
              {ingredientList.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-center border-b-[1px] h-12 mx-4 transition duration-300 text-slate-500 last:border-none "
                >
                  {/* <img
                      src={`http://www.themealdb.com/images/ingredients/${capitalizeString(
                        item.strIngredient.replaceAll(" ", "-").toLowerCase()
                      )}-small.png`}
                    /> */}
                  {item.strMeasure}
                  {"  "}
                  <Link
                    title={`Find other meals using the ingredients ${item.strIngredient}`}
                    to={`/ingredients/${item.strIngredient
                      .replaceAll(" ", "_")
                      .toLowerCase()}`}
                    className="hover:underline hover:text-primary-500"
                  >
                    {capitalizeString(item.strIngredient)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

Ingredients.propTypes = {
  detail: PropTypes.string.isRequired,
};
