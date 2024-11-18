import { createContext } from "react";
import PropTypes from "prop-types";

//Hooks
import { useLocalStorage } from "@uidotdev/usehooks";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favList", []);

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
    <ThemeContext.Provider value={{ favourites, handleFavourite }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeProvider;
