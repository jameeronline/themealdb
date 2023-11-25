//-------------------------------------------------------------------------
// String Capitalize
//-------------------------------------------------------------------------
export function capitalizeString(str) {
  // Check if the input string is not empty
  if (str.length === 0) {
    return str; // Return the original string if it's empty
  }

  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//-------------------------------------------------------------------------
//JavaScript function to convert a string into a URL-friendly format by removing special characters and replacing spaces with hyphens
//-------------------------------------------------------------------------
export function formatToUrlString(inputString) {
  // Remove special characters using a regular expression
  const removedSpecialChars = inputString.replace(/[^\w\s]/gi, "");

  // Replace spaces with hyphens
  const replacedSpaces = removedSpecialChars.replace(/\s+/g, "-");

  // Convert to lowercase
  const urlFriendlyString = replacedSpaces.toLowerCase();

  return urlFriendlyString;
}

//-------------------------------------------------------------------------
//Filter Ingredients And Measures and return result array in A-Z
//-------------------------------------------------------------------------
export function mapIngredientsAndMeasures(recipeJSON) {
  const resultArray = [];

  // Parse the JSON string
  const parsedJSON = JSON.parse(recipeJSON);

  // Extract the meals array
  const meals = parsedJSON.meals;

  // Check if meals is an array and not empty
  if (Array.isArray(meals) && meals.length > 0) {
    // Take the first meal (assuming there is only one in the provided JSON)
    const firstMeal = meals[0];

    // Iterate over the keys of the meal
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = firstMeal[ingredientKey]?.trim();
      const measure = firstMeal[measureKey]?.trim();

      // Check if either ingredient or measure is not empty
      if (ingredient !== "" || measure !== "") {
        const mappingObject = {};
        mappingObject["strIngredient"] = ingredient;
        mappingObject["strMeasure"] = measure;

        // Add the mapping object to the result array
        resultArray.push(mappingObject);
      }
    }
  }

  // Sort the result array based on ingredient key names in alphabetical order
  resultArray.sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueA.localeCompare(valueB);
  });

  return resultArray;
}
