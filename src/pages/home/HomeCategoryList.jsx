import PropTypes from "prop-types";
import Card from "components/Card";

export default function HomeCategoryList({ categoryDetails }) {
  if (!Array.isArray(categoryDetails) || categoryDetails.length === 0) {
    return null;
  }

  const filteredCategoryDetails = categoryDetails.slice(0, 12);

  return (
    <section className="my-32">
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl text-slate-800 font-display font-bold mb-2">
          Discover Culinary Variety
        </h2>
        <h6 className="text-typo-600 mb-8">
          Explore Different Meal Categories
        </h6>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed text-center">
          Explore our food category for a delightful collection of recipes. From
          savory dishes to sweet treats, discover a variety of culinary delights
          tailored to satisfy every taste. Dive into a world of simple and clean
          flavors that make every meal a joyous experience.
        </p>
      </header>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-16 gap-x-12">
        {filteredCategoryDetails.map((item) => (
          <div className="col-span-2 md:col-span-2" key={item.idCategory}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

HomeCategoryList.propTypes = {
  categoryDetails: PropTypes.arrayOf(
    PropTypes.shape({
      idCategory: PropTypes.string.isRequired,
      // Add more prop types if necessary
    })
  ),
};
