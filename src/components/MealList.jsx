import Thumbnail, { MemoizedThumbnail } from "components/Thumbnail";
import PropTypes from "prop-types";

//import

function MealList({ meals }) {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 md:gap-y-16 lg:grid-cols-12">
      {meals.map((item) => {
        return (
          <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
            {/* <Thumbnail item={item} /> */}
            <MemoizedThumbnail item={item} />
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
