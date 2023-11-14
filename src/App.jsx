import "./App.css";
import { useState, useEffect } from "react";

//vendor imports
import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./components/layouts";

//Pages
import Home from "./components/Home";

import CategoryList from "./components/pages/category/CategoryList";
import CategoryDetail from "./components/pages/category/CategoryDetail";

import AreaList from "./components/pages/area/AreaList";
import AreaDetail from "./components/pages/area/AreaDetail";

import Ingredients from "./components/pages/ingredients";

import RecipeDetail from "./components/pages/recipie_detail";
import Missing from "./components/pages/404";

import Search from "./components/pages/search";

//API Utilities
import { fetchLists, fetchCategoryDetails } from "./utils/dataLayer";

function App() {
  const [areas, setAreas] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    //Load Data List categories and areas from API
    const getAPIData = async () => {
      const areasData = await fetchLists("list", "a", "list");
      setAreas(areasData);

      const categoriesData = await fetchLists("list", "c", "list");
      setCategories(categoriesData);

      const ingredientsData = await fetchLists("list", "i", "list");
      setIngredients(ingredientsData);

      const categoriesDetailsData = await fetchCategoryDetails("categories");
      setCategoryDetails(categoriesDetailsData);
    };

    getAPIData();
  }, []);

  //Restore dark mode
  useEffect(() => {
    console.log("adad");
    if (JSON.parse(localStorage.getItem("darkMode"))) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} handleDarkMode={handleDarkMode} />
          }
        >
          <Route index element={<Home categoryDetails={categoryDetails} />} />
          <Route
            path="category"
            element={<CategoryList categories={categories} />}
          >
            <Route path=":categoryType" element={<CategoryDetail />} />
            <Route path="*" element={<Missing />} />
          </Route>
          <Route path="area" element={<AreaList areas={areas} />}>
            <Route path=":cuisineType" element={<AreaDetail />} />
            <Route path="*" element={<Missing />} />
          </Route>
          <Route
            path="ingredients"
            element={<Ingredients ingredients={ingredients} />}
          >
            <Route path="*" element={<Missing />} />
          </Route>
          <Route path="details/:id" element={<RecipeDetail />} />
          <Route path="search" element={<Search />} />
          {/* 
          <Route
            path="/categories/:categorydetail"
            component={CategoriesDetails}
          />
          <Route path="/categories" component={CategoriesList} />
          <Route path="/latest" component={LatestList} exact={true} />
          <Route path="/ingredients" component={IngredientList} exact={true} />
          <Route path="/area" component={AreaList} exact={true} /> */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
