const API_URL = "https://www.themealdb.com/api/json/v1/";
const API_KEY = "1";

//Fetch Lists Category, Area and Ingredients
export const fetchLists = async (type, query, queryParam) => {
  const queryVal = query != undefined ? `${query}=${queryParam}` : "";
  const data = await fetch(
    `${API_URL}/${API_KEY}/${type}.php?${queryVal}`.trim()
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.meals;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};

//Fetch Category Details
export const fetchCategoryDetails = async (type) => {
  const data = await fetch(`${API_URL}/${API_KEY}/${type}.php?`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.categories;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};

//Fetch Meals based on filter category | area | ingredients
export const fetchFilteredMeals = async (category, type) => {
  const data = await fetch(
    `${API_URL}/${API_KEY}/filter.php?${type}=${category}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.meals;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};

//Fetch Meals Details based on ID
export const fetchMealDetails = async (id) => {
  const data = await fetch(`${API_URL}/${API_KEY}/lookup.php?i=${id}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.meals;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};

//Search Meals Details based on Keyword
export const fetchSearch = async (searchKey) => {
  const data = await fetch(`${API_URL}/${API_KEY}/search.php?s=${searchKey}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.meals;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
};
