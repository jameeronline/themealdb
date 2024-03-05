import Card from "components/Card";

export default function HomeCategoryList({ categoryDetails }) {
  return (
    <>
      {Array.isArray(categoryDetails) && categoryDetails.length > 0 && (
        <section>
          <header className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl text-slate-800 font-display font-bold mb-8">
              Popular Categories
            </h2>
            <p className="text-lg text-slate-600 text-center">
              Explore our food category for a delightful collection of recipes.
              From savory dishes to sweet treats, discover a variety of culinary
              delights tailored to satisfy every taste. Dive into a world of
              simple and clean flavors that make every meal a joyous experience.
            </p>
          </header>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 md:gap-16 lg:grid-cols-12">
            {categoryDetails
              .filter((item, index) => index < 12)
              .map((item, index) => {
                return (
                  <div className="col-span-1 md:col-span-2" key={index}>
                    <Card item={item} key={item.idCategory} />
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}
