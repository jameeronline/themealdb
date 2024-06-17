const LABELS = {
  HEADER: {
    LOGO: "The Meal DB",
    NAV: [
      {
        LABEL: "Categories",
        URL: "/category",
      },
      {
        LABEL: "Cuisine Type",
        URL: "/area/american",
      },
      // {
      //   LABEL: "Ingredients",
      //   URL: "/ingredients",
      // },
      {
        LABEL: "Favourites",
        URL: "/favourites",
      },
      {
        LABEL: "Search",
        URL: "/search",
      },
      {
        LABEL: "Contact",
        URL: "/contact",
      },
      {
        LABEL: "About",
        URL: "/about",
      },
    ],
  },
  FOOTER: {
    MAIN_FOOTER: {
      SOCIAL: {
        TITLE: "Follow Us",
        LINKS: [
          {
            ICON: "Facebook",
            LABEL: "Facebook",
            URL: "https://facebook.com/themealdb",
          },
          {
            ICON: "Instagram",
            LABEL: "Instagram",
            URL: "https://instagram.com/themealdb",
          },
          {
            ICON: "X",
            LABEL: "X",
            URL: "https://twitter.com/themealdb",
          },
          {
            ICON: "Linkedin",
            LABEL: "LinkedIN",
            URL: "https://linkedin.com/themealdb",
          },
          {
            ICON: "Youtube",
            LABEL: "Youtube",
            URL: "https://youtube.com/themealdb",
          },
        ],
      },
    },
    SUB_FOOTER: [
      {
        LABEL: "Privacy Policy",
        URL: "/privacy-policy",
      },
      {
        LABEL: "Terms of Service",
        URL: "/terms-of-service",
      },
      {
        LABEL: "Cookies Settings",
        URL: "/cookies-settings",
      },
    ],
  },
  WIDGET_AREA_TITLE: "Areas",
  WIDGET_CATEGORY_TITLE: "Categories",
  PAGES: {
    SEARCH: {
      TITLE: "Discover Your Perfect Meal",
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
