import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

//components
import ListingItems from "components/ListingItems";

//context
import { DataContext } from "src/context/DataContext";

//utility function
import { hasData } from "src/utils/helperFunctions";

const CategoryList = () => {
  const { categories } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      {hasData(categories) && (
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
