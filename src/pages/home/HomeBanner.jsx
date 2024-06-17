import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiRefresh } from "react-icons/bi";
import Alert from "src/components/Alert";
import { formatToUrlString, hasData } from "src/utils/helperFunctions";
import config from "src/configuration/config";
import { useRandomMeal } from "src/api-services/queries";

export default function HomeBanner() {
  const { data, isLoading, isError, error } = useRandomMeal();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const isEmpty = hasData(data?.meals);

  return (
    <>
      {!isEmpty && <Alert />}
      {isEmpty && (
        <>
          {data?.meals.map((item, index) => (
            <section
              key={index}
              className="grid w-full overflow-hidden grid-cols-1 my-auto mb-16 rounded-2xl bg-secondary-50 md:grid-cols-2 md:gap-6"
            >
              <div className="flex items-center justify-end col-span-1 md:relative">
                <LazyLoadImage
                  className="h-full w-full object-cover aspect-video"
                  src={item.strMealThumb}
                  alt="header image"
                />
              </div>
              <div className="flex flex-col justify-center col-span-1 p-8 md:p-16 text-center lg:text-start">
                <h4 className="text-sm text-primary mb-4 md:mb-8">
                  Today's handpicked meal
                </h4>
                <h1 className="mb-8 text-2xl font-extrabold leading-normal text-slate-800 lg:text-4xl font-display">
                  {item.strMeal}
                </h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                  Say goodbye to endless hours spent on building templates from
                  scratch. Experience the quickest, most responsive, and
                  trendiest dashboard solution available. Seriously.
                </p>
                <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4">
                  <Link
                    to={`${config.details}/${formatToUrlString(item.strMeal)}`}
                    state={{ id: item.idMeal }}
                    className="flex items-center py-4 text-sm font-bold text-white px-7 bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-secondary-100 transition duration-300 rounded"
                  >
                    Meal Details
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
}
