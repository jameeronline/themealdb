import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

//components
import ListingItems from "components/ListingItems";

//context
import { DataContext } from "src/context/DataContext";

const CategoryList = () => {
  const { categories } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      {Array.isArray(categories) && categories.length > 0 && (
        <ListingItems
          title="Category"
          items={categories}
          itemKey="strCategory"
          itemLabel="category"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <Outlet />
    </>
  );
};

export default CategoryList;
