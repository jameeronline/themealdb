import React, { useState, useEffect, useRef } from "react";

// TwitterIcon
// FacebookIcon
// WhatsappIcon
// TelegramIcon
// PinterestIcon

// import { ReactSVG } from "react-svg";
// import dashboardSVG from "../../../../../images/dropdown/dashboard.svg";
// import arrowSVG from "../../../../../images/dropdown/arrow.svg";
// import channelSVG from "../../../../../images/dropdown/channel.svg";
// import userSVG from "../../../../../images/dropdown/user.svg";
// import userProfileSVG from "../../../../../images/dropdown/userProfile.svg";
import {
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  TwitterShareButton,
} from "react-share";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const wrapperRef = useRef(null);

  const { DropdownIcon } = props;

  const navigationItems = [
    {
      linkName: "Twitter",
      icon: TwitterIcon,
      sortDescription: "Quick overview of all basic metrics and settings",
    },
    {
      linkName: "Facebook",
      icon: FacebookIcon,
      sortDescription: "Detailed analytic date reviews management",
    },
    { separator: true },
    {
      linkName: "WhatsApp",
      icon: WhatsappIcon,
      sortDescription:
        "Generated from conversion paths, the sequences of interactions",
    },
    {
      linkName: "Telegram",
      icon: TelegramIcon,
      sortDescription:
        "User settings allow you to configure your email preferences",
    },
  ];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleKeyDown = (e) => {
    if (isOpen) {
      e.preventDefault();

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0);
          } else {
            if (navigationItems[currentItem + 1]?.hasOwnProperty("separator")) {
              setCurrentItem(currentItem + 2);
            } else {
              setCurrentItem(currentItem + 1);
            }
          }
          break;
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1);
          } else {
            if (navigationItems[currentItem - 1]?.hasOwnProperty("separator")) {
              setCurrentItem(currentItem - 2);
            } else {
              setCurrentItem(currentItem - 1);
            }
          }
          break;
        // Escape
        case 27:
          setCurrentItem(1);
          setIsOpen(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      {/*<!-- Component: Icon dropdown menu --> */}
      <div className="relative inline-flex">
        {/*  <!-- Start Dropdown trigger --> */}
        <button
          className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span>Choose one</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="t-01 d-01"
              role="graphics-symbol"
            >
              <title id="t-01">Button icon</title>
              <desc id="d-01">An icon describing the buttons usage</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        {/*  <!-- End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            if (item.separator) {
              return (
                <li
                  key={index}
                  role="separator"
                  className="border-b border-slate-200"
                ></li>
              );
            } else
              return (
                <li key={index}>
                  <a
                    className={` ${
                      index === currentItem
                        ? "bg-emerald-50 text-emerald-500"
                        : "bg-none text-slate-500"
                    }
                    flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
                    href="#"
                    aria-current={index === currentItem ? "page" : "false"}
                  >
                    {/* <ReactSVG
                      src={item.icon}
                      className="flex-shrink-0 w-5 h-5"
                    /> */}
                    <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                      <span className="leading-5 truncate">
                        {item.linkName}
                      </span>
                      <span className="text-sm whitespace-normal opacity-70">
                        {item.sortDescription}
                      </span>
                    </span>
                  </a>
                </li>
              );
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/*<!-- End Icon dropdown menu --> */}
    </>
  );
}
