import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { useLists, useDetailedCategories } from "src/api-services/queries";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { data: categoryList } = useLists("c");
  const { data: areaList } = useLists("a");
  const { data: ingredientList } = useLists("i");
  const { data: detailedCategories } = useDetailedCategories();

  const areas = areaList?.meals;
  const categories = categoryList?.meals;
  const ingredients = ingredientList?.meals;
  const categoryDetails = detailedCategories?.categories;

  return (
    <DataContext.Provider
      value={{ areas, categories, ingredients, categoryDetails }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
