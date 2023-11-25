import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import Spinner from "../../Spinner";
import Thumbnail from "../../Thumbnail";
import Alert from "../../Alert";

//Helper functions
import { capitalizeString } from "../../../utils/helperFunc";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AreaDetail() {
  const navigate = useNavigate();
  const { cuisineType } = useParams();

  const API_URL = `${import.meta.env.VITE_API_URL}/filter.php?a=${cuisineType}`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  console.log(data);
  console.log(error);
  console.log(isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert />;
  }

  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            {cuisineType !== "" &&
              cuisineType != undefined &&
              capitalizeString(cuisineType)}
          </h1>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {data.meals.map((item) => {
              return (
                <div className="col-span-4" key={item.idMeal}>
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}

      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
