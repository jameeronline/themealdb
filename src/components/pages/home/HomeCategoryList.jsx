import Card from "components/Card";

export default function HomeCategoryList({ categoryDetails }) {
  return (
    <>
      {Array.isArray(categoryDetails) && categoryDetails.length > 0 && (
        <section>
          <header className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Categories</h2>
            <p className="text-base text-gray-600 text-center">
              Explore our food category for a delightful collection of recipes.
              From savory dishes to sweet treats, discover a variety of culinary
              delights tailored to satisfy every taste. Dive into a world of
              simple and clean flavors that make every meal a joyous experience.
            </p>
          </header>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {categoryDetails
              .filter((item, index) => index < 12)
              .map((item, index) => {
                return (
                  <div className="col-span-2" key={index}>
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
