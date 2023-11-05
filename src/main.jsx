import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Routes>
      {/* <Route path="/details/:id" component={MealDetail} />
          <Route
            path="/categories/:categorydetail"
            component={CategoriesDetails}
          />
          <Route path="/categories" component={CategoriesList} />
          <Route path="/latest" component={LatestList} exact={true} />
          <Route path="/ingredients" component={IngredientList} exact={true} />
          <Route path="/area" component={AreaList} exact={true} /> */}
      <Route path="/" index element={<Home />} />
    </Routes>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
