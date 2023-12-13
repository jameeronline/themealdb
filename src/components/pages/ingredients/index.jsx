import { useParams } from "react-router-dom";
import useSWR from "swr";

//components
import Spinner from "src/components/common/Spinner";
import Alert from "src/components/Alert";
import Empty from "src/components/common/Empty";
import Thumbnail from "src/components/Thumbnail";

//fetcher function
import { fetcher, capitalizeString } from "src/utils/helperFunc";

export default function Ingredients() {
  const { id } = useParams();
  const API_URL = `${import.meta.env.VITE_API_URL}/filter.php?i=${id}`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert />;
  }

  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && <Empty />}
      {!isEmpty && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            {id !== "" &&
              id != undefined &&
              `Ingredient: "${capitalizeString(id)}"`}
          </h1>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {data.meals.map((item) => {
              return (
                <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}
      <div>Ingredients {id}</div>
    </>
  );
}
