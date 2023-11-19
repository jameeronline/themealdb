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

//Import Context
import { ThemeContext } from "./components/context/ThemeContext";
import { useLocalStorage } from "@uidotdev/usehooks";

import useFetch from "use-http";

//API Utilities
import {
  fetchLists,
  fetchCategoryDetails,
  fetchRandomMeal,
} from "./utils/dataLayer";

function App() {
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);

  const [randomMeal, setRandomMeal] = useState([]);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const [favourites, setFavourites] = useLocalStorage("favList", []);

  const [showError, setShowError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [posts, setPosts] = useState(null);

  // const options = {};
  // const {
  //   loading,
  //   error,
  //   data = [],
  // } = useFetch("https://jsonplaceholder.typicode.com/posts", options, []);

  // console.log(data);
  // console.log(error);

  // const { error, data } = useFetch(
  //   `https://jsonplaceholder.typicode.com/posts/`
  // );

  // console.log(error);
  // console.log(data);

  // console(responseData);

  const handleDarkMode = () => {
    //const newDarkMode = !darkMode;
    setDarkMode(!darkMode);
    //localStorage.setItem("darkMode", !darkMode);
    document.documentElement.classList.toggle("dark");
    //setThemeMode(themeMode === "dark" ? "light" : "dark");
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
    };

    getAPIData();
  }, []);

  //Restore dark mode
  useEffect(() => {
    if (JSON.parse(darkMode)) {
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

  const handleFavourite = (obj) => {
    let newfavList = [];
    if (JSON.stringify(favourites).includes(obj.idMeal)) {
      newfavList = favourites.filter((item) => item.idMeal !== obj.idMeal);
    } else {
      newfavList = [...favourites, obj];
    }

    setFavourites(newfavList);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ darkMode, handleDarkMode, favourites, handleFavourite }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
