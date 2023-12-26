const FOOTER = {
  MAIN_FOOTER: {
    LINKGROUP: {
      GROUP1: {
        TITLE: "Product",
        LINKS: [
          {
            LABEL: "Features",
            URL: "/features",
          },
          {
            LABEL: "Customers",
            URL: "/customers",
          },
          {
            LABEL: "Why us?",
            URL: "/why-us",
          },
          {
            LABEL: "Pricing",
            URL: "/pricing",
          },
        ],
      },
      GROUP2: {
        TITLE: "About us",
        LINKS: [
          {
            LABEL: "About us",
            URL: "/about",
          },
          {
            LABEL: "Contact",
            URL: "/contact",
          },
          {
            LABEL: "Leadership",
            URL: "/leaership",
          },
          {
            LABEL: "Blog",
            URL: "/blog",
          },
          {
            LABEL: "Events",
            URL: "/events",
          },
        ],
      },
    },
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
  SUB_FOOTER: {
    DESC: "All rights reserved.",
    LINKS: [
      {
        LABEL: "Privacy Policy",
        URL: "/privacy",
      },
      {
        LABEL: "Terms of Service",
        URL: "/terms",
      },
      {
        LABEL: "Cookies Settings",
        URL: "/cookies-settings",
      },
    ],
  },
  NEWSLETTER: {
    TITLE: "Newsletter",
    DESC: "Stay up to date with the latest features and releases by joining our newsletter.",
    INPUT_LBL: "Email Address",
    INPUT_PLACEHOLDER: "Ex: example@google.com",
    BTN_LBL: "Subscribe",
    VALIDATE_MSG: "Please enter a valid email address",
    TERMS:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  },
};

Object.freeze(FOOTER);

export default FOOTER;
