export function capitalizeString(str) {
  // Check if the input string is not empty
  if (str.length === 0) {
    return str; // Return the original string if it's empty
  }

  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//JavaScript function to convert a string into a URL-friendly format by removing special characters and replacing spaces with hyphens
export function formatToUrlString(inputString) {
  // Remove special characters using a regular expression
  const removedSpecialChars = inputString.replace(/[^\w\s]/gi, "");

  // Replace spaces with hyphens
  const replacedSpaces = removedSpecialChars.replace(/\s+/g, "-");

  // Convert to lowercase
  const urlFriendlyString = replacedSpaces.toLowerCase();

  return urlFriendlyString;
}
