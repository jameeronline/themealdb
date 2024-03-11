import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    //Load Data List categories and areas from API
    const getAPIData = async () => {
      try {
        const response = await axios.all([
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/categories.php"),
        ]);
        setAreas(response[0]?.data?.meals);
        setCategories(response[1]?.data?.meals);
        setIngredients(response[2]?.data?.meals);
        setCategoryDetails(response[3]?.data?.categories);
      } catch (e) {
        console.log(e.message);
      }
    };

    getAPIData();
  }, []);

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
