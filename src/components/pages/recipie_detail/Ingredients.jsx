import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { mapIngredientsAndMeasures } from "../../../utils/helperFunc";

export default function Ingredients({ detail }) {
  const [ingredientList, setIngredientList] = useState(null);
  useEffect(() => {
    setIngredientList(mapIngredientsAndMeasures(detail));
  }, [detail]);

  return (
    <>
      {ingredientList !== null && ingredientList.length > 0 && (
        <>
          <h4 className="text-lg font-bold mb-6">Ingredients:</h4>

          <table
            className="w-full text-left border border-separate rounded border-slate-200"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Ingredient
                </th>
                <th
                  scope="col"
                  className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Measurement
                </th>
              </tr>
            </thead>
            <tbody>
              {ingredientList.map((item, index) => (
                <tr
                  className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none"
                  key={index}
                >
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {item.strIngredient}
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                  >
                    {item.strMeasure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

Ingredients.propTypes = {
  detail: PropTypes.string.isRequired,
};
