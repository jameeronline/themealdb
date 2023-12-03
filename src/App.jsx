import "./App.css";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

import axios from "axios";

//vendor imports
import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "components/layouts";

//Pages
import Home from "components/pages/home/Home";

import CategoryList from "components/pages/category/CategoryList";
import CategoryDetail from "components/pages/category/CategoryDetail";

import AreaList from "components/pages/area/AreaList";
import AreaDetail from "components/pages/area/AreaDetail";

import Ingredients from "components/pages/ingredients";

import RecipeDetail from "components/pages/recipie_detail";

import Missing from "components/pages/404";
import Favourites from "components/pages/favourites";
import Search from "components/pages/search";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";

//Users
import Login from "components/pages/auth/login";
import SingUp from "components/pages/auth/signup";

//Import Context
import { ThemeContext } from "components/context/ThemeContext";
import DataProvider, { DataContext } from "components/context/DataContext";
import { useLocalStorage, useGeolocation } from "@uidotdev/usehooks";

//import useFetch from "use-http";

function App() {
  //const [areas, setAreas] = useState([]);
  //const [categories, setCategories] = useState([]);
  //const [ingredients, setIngredients] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [favourites, setFavourites] = useLocalStorage("favList", []);

  const [showError, setShowError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    //Load Data List categories and areas from API
    const getAPIData = async () => {
      try {
        const response = await axios.all([
          //axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
          //axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
          //axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list"),
          axios.get("https://www.themealdb.com/api/json/v1/1/categories.php"),
          //axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        ]);

        //setCategories(response[0].data.meals);
        //setAreas(response[1].data.meals);
        //setIngredients(response[2].data.meals);
        setCategoryDetails(response[0].data.categories);
        //setRandomMeal(response[1].data.meals);
        console.log("print");
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
      <HelmetProvider>
        <ThemeContext.Provider
          value={{ darkMode, handleDarkMode, favourites, handleFavourite }}
        >
          <DataProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="signup" element={<SingUp />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route
                  index
                  element={<Home categoryDetails={categoryDetails} />}
                />
                <Route path="category" element={<CategoryList />}>
                  {/* <Route index path="beef" element={<CategoryDetail />} /> */}
                  <Route
                    index
                    path=":categoryType"
                    element={<CategoryDetail />}
                  />
                </Route>
                <Route path="area" element={<AreaList />}>
                  <Route path=":cuisineType" element={<AreaDetail />} />
                </Route>
                <Route path="ingredients" element={<Ingredients />}></Route>
                <Route path="details/:id" element={<RecipeDetail />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="search" element={<Search />} />
                <Route path="*" element={<Missing />} />
              </Route>
            </Routes>
          </DataProvider>
        </ThemeContext.Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
