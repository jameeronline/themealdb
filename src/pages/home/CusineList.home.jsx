import React from "react";
import { Link } from "react-router-dom";

//data
import { cusineList } from "./CusineList.db";

function CusineList() {
  return (
    <>
      <section className="my-20">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl text-slate-800 font-display font-bold mb-2">
            Explore Global Flavors
          </h2>
          <h6 className="text-typo-600 mb-8">
            Discover Cuisine from Around the World
          </h6>
          <p className="text-sm md:text-base leading-relaxed text-typo-500 mb-12">
            Explore our food category for a delightful collection of recipes.
            From savory dishes to sweet treats, discover a variety of culinary
            delights tailored to satisfy every taste. Dive into a world of
            simple and clean flavors that make every meal a joyous experience.
          </p>
        </header>
        <div className="grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12">
          {cusineList.map((item) => (
            <Link
              to={`/area/${item.strArea}`}
              key={item.strArea}
              className="col-span-2 flex flex-col gap-4 justify-center items-center"
            >
              <div className="w-24 aspect-square rounded-full overflow-hidden shadow-xl">
                <img
                  src={item.flag}
                  className="max-w-full h-full object-cover"
                />
              </div>
              <span className="font-display">{item.strArea}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default CusineList;
