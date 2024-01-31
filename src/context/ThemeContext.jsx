import { createContext, useEffect } from "react";
import PropTypes from "prop-types";

//Hooks
import { useLocalStorage } from "@uidotdev/usehooks";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [favourites, setFavourites] = useLocalStorage("favList", []);

  //Restore dark mode
  useEffect(() => {
    if (JSON.parse(darkMode)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const handleDarkMode = () => {
    console.log("theme mode changes");
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleFavourite = (obj) => {
    console.log("favorite changes");
    let newfavList = [];
    if (JSON.stringify(favourites).includes(obj.idMeal)) {
      newfavList = favourites.filter((item) => item.idMeal !== obj.idMeal);
    } else {
      newfavList = [...favourites, obj];
    }

    setFavourites(newfavList);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, handleDarkMode, favourites, handleFavourite }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeProvider;
