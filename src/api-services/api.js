import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_VERCEL_API_URL}`;

const axiosQuery = axios.create({
  baseURL: BASE_URL,
});

//Get List(categories, area and ingredients)
export const getList = async (option) => {
  return await axiosQuery
    .get(`list.php`, {
      params: {
        [option]: "list",
      },
    })
    .then((reponse) => reponse.data);
};

//Get detailed Categories
export const getDetailedCategories = async () => {
  return await axiosQuery.get(`categories.php`).then((reponse) => reponse.data);
};

//Get Random Meal
export const getRandomMeal = async () => {
  return await axiosQuery.get(`random.php`).then((reponse) => reponse.data);
};

//get Meal details based on categories
export const getCategoryMeals = async (option) => {
  return await axiosQuery
    .get(`filter.php`, {
      params: {
        c: option,
      },
    })
    .then((reponse) => reponse.data);
};

//get Meal details based on Area/cusine
export const getAreaMeals = async (option) => {
  return await axiosQuery
    .get(`filter.php`, {
      params: {
        a: option,
      },
    })
    .then((reponse) => reponse.data);
};

//get Meal details based on Ingredients
export const getIngredientMeals = async (option) => {
  return await axiosQuery
    .get(`filter.php`, {
      params: {
        i: option,
      },
    })
    .then((reponse) => reponse.data);
};

//get meals by search term
export const getMealsBySearch = async (searchKey) => {
  return await axiosQuery
    .get(`search.php`, {
      params: {
        s: searchKey,
      },
    })
    .then((response) => response.data);
};

//get meal details

export const getMealDetails = async (id) => {
  return await axiosQuery
    .get(`lookup.php`, {
      params: {
        i: id,
      },
    })
    .then((response) => response.data);
};
