import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../../Spinner";
import RecipieThumb from "../../RecipieThumb";

import { fetchFilteredMeals } from "../../../utils/dataLayer";

//Helper functions
import { capitalizeString } from "../../../utils/helperFunc";

export default function CategoryDetail() {
  const navigate = useNavigate();
  const { categoryType } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Load Data from API
    const getAPIData = async () => {
      const filteredMeals = await fetchFilteredMeals(categoryType, "c");
      setIsLoading(false);
      setItems(filteredMeals);
    };

    getAPIData();
  }, [categoryType]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        {categoryType !== "" &&
          categoryType != undefined &&
          capitalizeString(categoryType)}
      </h1>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        {items.map((item) => {
          return (
            <div className="col-span-4" key={item.idMeal}>
              <RecipieThumb item={item} />
            </div>
          );
        })}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
