import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { randomMeal } from "../utils/dataLayer";

export default function Banner() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Load Data List categories and areas from API
    const getAPIData = async () => {
      const mealInfo = await randomMeal();
      setItems(mealInfo);
    };

    getAPIData();
  }, []);

  return (
    <>
      {Array.isArray(items) && items.length > 0 && (
        <>
          {items.map((item, index) => (
            <section
              key={index}
              className="grid w-full overflow-hidden grid-cols-1 my-auto mb-16 bg-primary-50 md:grid-cols-2 xl:gap-14 md:gap-5"
            >
              <div className="flex flex-col justify-center col-span-1 p-16 text-center lg:text-start">
                <div className="flex items-center justify-center mb-4 lg:justify-normal">
                  <img
                    className="h-5"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png"
                    alt="logo"
                  />
                  <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
                    Explore the Latest Foods around the word
                  </h4>
                </div>
                <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
                  {item.strMeal}
                </h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                  Say goodbye to endless hours spent on building templates from
                  scratch. Experience the quickest, most responsive, and
                  trendiest dashboard solution available. Seriously.
                </p>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 transition duration-300 rounded">
                    Meal Details
                  </button>
                  <button className="flex items-center py-4 text-sm font-medium px-7 border border-primary-500 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded">
                    Explore More
                  </button>
                </div>
              </div>
              <div className="items-center justify-end hidden col-span-1 md:flex">
                <LazyLoadImage
                  className="h-full"
                  src={item.strMealThumb}
                  alt="header image"
                />
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
}
