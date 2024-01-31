import { useContext } from "react";
import { Outlet } from "react-router-dom";

//components
import ListingItems from "components/ListingItems";

//context
import { DataContext } from "src/context/DataContext";

const CategoryList = () => {
  const { categories } = useContext(DataContext);

  return (
    <section>
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          {Array.isArray(categories) && categories.length > 0 && (
            <ListingItems
              title="Category"
              items={categories}
              itemKey="strCategory"
              itemLabel="category"
            />
          )}
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
