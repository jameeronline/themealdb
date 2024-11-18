import { useState } from "react";
import { Outlet } from "react-router-dom";

//components
import ListingItems from "components/ListingItems";

//context
import { useDataContext } from "src/context/DataContext";

//utility function
import { hasData } from "src/utils/helperFunctions";

const CategoryList = () => {
  const { categories } = useDataContext();

  return (
    <>
      {/* {hasData(categories) && (
        <>
          <select
            name="selected-category"
            id=""
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            {categories.map((item, index) => (
              <option key={index} value={item.strCategory}>
                {item.strCategory}
              </option>
            ))}
          </select>
          <ListingItems
            title="Category"
            items={categories}
            itemKey="strCategory"
            itemLabel="category"
            // selectedItem={selectedItem}
            // setSelectedItem={setSelectedItem}
          />
        </>
      )} */}
      <Outlet />
    </>
  );
};

export default CategoryList;
