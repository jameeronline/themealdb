import Thumbnail from "components/Thumbnail";
import PropTypes from "prop-types";

function MealList({ meals }) {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      {meals.map((item) => {
        return (
          <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
            <Thumbnail item={item} />
          </div>
        );
      })}
    </div>
  );
}

MealList.propTypes = {
  meals: PropTypes.array,
};

export default MealList;
