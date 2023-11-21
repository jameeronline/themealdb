import { useContext } from "react";
import { Outlet } from "react-router-dom";

import ListingItems from "../../ListingItems";

//context
import { DataContext } from "../../context/DataContext";

const CategoryList = () => {
  const { categories } = useContext(DataContext);
  return (
    <section>
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-3">
          {categories != null && categories.length > 0 && (
            <ListingItems
              title="Category"
              items={categories}
              itemKey="strCategory"
              itemLabel="category"
            />
          )}
        </div>
        <div className="col-span-4 lg:col-span-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
