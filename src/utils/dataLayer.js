const API_URL = "https://www.themealdb.com/api/json/v1/";
const API_KEY = "1";

export const fetchData = async (type) => {
  //fetch data list
  const data = await fetch(`${API_URL}/${API_KEY}/list.php?${type}=list"`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      return response.meals;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};
