const LABELS = {
  HEADER: {
    LOGO: "The Meal DB",
    NAV: [
      // {
      //   label: "Home",
      //   link: "/",
      // },
      {
        label: "Categories",
        link: "/category",
      },
      {
        label: "Cuisine Type",
        link: "/area",
      },
      {
        label: "Ingredients",
        link: "/ingredients",
      },
      {
        label: "Favourites",
        link: "/favourites",
      },
      {
        label: "Search",
        link: "/search",
      },
    ],
  },
  WIDGET_AREA_TITLE: "Areas",
  WIDGET_CATEGORY_TITLE: "Categories",
  PAGES: {
    SEARCH: {
      SEARCH_TITLE: "Find the Meal you like",
      SEARCH_INPUT_PLACEHOLDER: "Discover recipes from around the world...",
    },
  },
};

Object.freeze(LABELS);

export default LABELS;
