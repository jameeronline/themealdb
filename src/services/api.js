import axios from "axios";

//API parameters
// const API_URL = "https://www.themealdb.com/api/json/v1/";
// const API_KEY = "1";

const API_URL = "https://jsonplaceholder.typicode.com";
//const API_KEY = "1";

const mealdbAPI = axios.create({
  baseURL: API_URL,
});

export const getUsers = async () => {
  return await mealdbAPI("users").then((response) => response.data);
};
