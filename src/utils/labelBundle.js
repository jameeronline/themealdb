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
      TITLE: "Find the Meal you like",
      INPUT_PLACEHOLDER: "Discover recipes...",
      INPUT_HELP_TEXT:
        "Please input your search term/key and ENTER key to continue the search",
    },
    MISSING: {
      TITLE: "404 Error",
      SUB_TITLE: "Page not found",
      DESCRIPTION:
        "Sorry, the page you are looking for doesn't exist. Here are some helpful links:",
      BUTTON_LABEL_1: "Go Back",
      BUTTON_LABEL_2: "Take me Home",
    },
  },
};

Object.freeze(LABELS);

export default LABELS;
