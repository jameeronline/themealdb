import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";

import InlineSpinner from "components/common/InlineSpinner";

//Router imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Layouts
import Layout from "src/layouts";

//Pages
import Home from "src/pages/home";

import CategoryIndex, { loader as categoryLoader } from "src/pages/category";
import CategoryList from "src/pages/category/CategoryList";
import CategoryDetail from "src/pages/category/CategoryDetail";

import AreaIndex, { loader as areaLoader } from "src/pages/area";
import AreaList from "src/pages/area/AreaList";
import AreaDetail from "src/pages/area/AreaDetail";
import Ingredients from "src/pages/ingredients";
import RecipeDetail from "src/pages/recipie_detail";

import Favourites from "src/pages/favourites";
import Search, { loader as searchLoader } from "src/pages/search";
import Contact from "src/pages/contact";
import About from "src/pages/about";

import Missing from "src/pages/404";

//Auth
import Login from "src/pages/auth/login";
import SingUp from "src/pages/auth/signup";

//CMS - Blog
import Blog from "src/pages/blog";
import Post from "src/pages/post";

//CMS - Footer Pages
import Terms from "src/pages/guidelines/Terms";
import Privacy from "src/pages/guidelines/Privacy";

//Context
import ThemeProvider from "src/context/ThemeContext";
import DataProvider from "src/context/DataContext";

//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<CategoryList />}>
          <Route index element={<CategoryIndex />} loader={categoryLoader} />
          <Route path=":categoryType" element={<CategoryDetail />} />
        </Route>
        <Route path="area" element={<AreaList />}>
          <Route index element={<AreaIndex />} loader={areaLoader} />
          <Route path=":cuisineType" element={<AreaDetail />} />
        </Route>
        <Route path="ingredients/:id" element={<Ingredients />} />
        <Route path="recipe-details/:id" element={<RecipeDetail />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} loader={searchLoader} />

        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":postID" element={<Post />} />
        </Route>

        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />

        <Route path="*" element={<Missing />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SingUp />} />
    </>
  )
);

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense fallback={<InlineSpinner />}>
          <ThemeProvider>
            <DataProvider>
              <RouterProvider router={router} />
            </DataProvider>
          </ThemeProvider>
        </Suspense>
      </HelmetProvider>
    </>
  );
}
