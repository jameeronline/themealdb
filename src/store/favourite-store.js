import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavouriteStore = create(
  persist(
    (set) => ({
      favourites: [],
      addFavourites: (item) => {
        set((state) => {
          let newfavList = [];
          if (JSON.stringify(state.favourites).includes(item.idMeal)) {
            newfavList = state.favourites.filter(
              (favItem) => favItem.idMeal !== item.idMeal
            );
          } else {
            newfavList = [...state.favourites, item];
          }
          return { favourites: newfavList };
        });
      },
    }),
    {
      name: "favList", // Key in localStorage
    }
  )
);
