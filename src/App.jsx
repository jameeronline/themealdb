import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

//vendor imports
import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./components/layouts";

//Pages
import Home from "./components/pages/home/Home";

import CategoryList from "./components/pages/category/CategoryList";
import CategoryDetail from "./components/pages/category/CategoryDetail";

import AreaList from "./components/pages/area/AreaList";
import AreaDetail from "./components/pages/area/AreaDetail";

import Ingredients from "./components/pages/ingredients";

import RecipeDetail from "./components/pages/recipie_detail";
import Missing from "./components/pages/404";

import Favourites from "./components/pages/favourites";

import Search from "./components/pages/search";

//API Utilities
import {
  fetchLists,
  fetchCategoryDetails,
  fetchRandomMeal,
} from "./utils/dataLayer";

function App() {
  const [areas, setAreas] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showError, setShowError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console(responseData);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    //Load Data List categories and areas from API
    const getAPIData = async () => {
      try {
        const response = await axios.all([
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/categories.php"),
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        ]);

        setCategories(response[0].data.meals);
        setAreas(response[1].data.meals);
        setIngredients(response[2].data.meals);
        setCategoryDetails(response[3].data.categories);
        setRandomMeal(response[4].data.meals);
      } catch (e) {
        console.log(e.message);
        setShowError(e.message);
      }

      // const areasData = await fetchLists("list", "a", "list");
      // setAreas(areasData);

      // const categoriesData = await fetchLists("list", "c", "list");
      // setCategories(categoriesData);

      // const ingredientsData = await fetchLists("list", "i", "list");
      // setIngredients(ingredientsData);

      // const categoriesDetailsData = await fetchCategoryDetails("categories");
      // setCategoryDetails(categoriesDetailsData);

      //Load Data List categories and areas from API
      // const mealInfo = await fetchRandomMeal();
      // setRandomMeal(mealInfo.meals);
    };

    getAPIData();
  }, []);

  //Restore dark mode
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  //get Random Meals
  const getRandomMeals = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setRandomMeal(response.data.meals);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} handleDarkMode={handleDarkMode} />
          }
        >
          <Route
            index
            element={
              <Home
                categoryDetails={categoryDetails}
                randomMeal={randomMeal}
                getRandomMeals={getRandomMeals}
              />
            }
          />
          <Route
            path="category"
            element={<CategoryList categories={categories} />}
          >
            <Route path=":categoryType" element={<CategoryDetail />} />
          </Route>
          <Route path="area" element={<AreaList areas={areas} />}>
            <Route path=":cuisineType" element={<AreaDetail />} />
          </Route>
          <Route
            path="ingredients"
            element={<Ingredients ingredients={ingredients} />}
          ></Route>
          <Route path="details/:id" element={<RecipeDetail />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
