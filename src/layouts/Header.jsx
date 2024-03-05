import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMoon, BiSun, BiSearch } from "react-icons/bi";
import { clsx } from "clsx";

//Labels
import { GLOBAL_LBL, HEADER_LBL } from "src/labels";

//Theme
import { ThemeContext } from "src/context/ThemeContext";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { darkMode, handleDarkMode } = useContext(ThemeContext);

  const LOGO = GLOBAL_LBL.LOGO;
  const NAV = HEADER_LBL.NAV;

  return (
    <>
      <header className="bg-white sticky top-0 z-20 w-full after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden dark:bg-primary-950">
        <div className="relative mx-auto max-w-full px-6 xl:container">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium"
            role="navigation"
          >
            {/* !-- Brand logo --> */}
            <Link
              to="/"
              aria-label={LOGO}
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg font-bold focus:outline-none lg:flex-1"
            >
              {LOGO}
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {NAV.map(({ LABEL, URL }, index) => (
                <li role="none" className="flex items-stretch" key={index}>
                  <NavLink
                    to={URL}
                    onClick={() => setIsToggleOpen(false)}
                    role="menuitem"
                    aria-haspopup="false"
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center gap-2 py-2 transition-colors duration-300 hover:text-primary-500 focus:text-primary-600 focus:outline-none focus-visible:outline-none lg:px-6",
                        isActive ? "underline text-primary-500" : ""
                      )
                    }
                  >
                    <span>{LABEL}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 gap-4 lg:ml-0 lg:flex-1 lg:p-0">
              <Link
                to="search"
                className="inline-flex items-center justify-center h-12 md:px-6 aspect-square gap-2 text-sm font-medium text-white transition duration-300 rounded-full whitespace-nowrap bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 disabled:shadow-none"
              >
                <BiSearch className="h-6 w-6" />{" "}
                <span className="text-base hidden md:inline">Search</span>
              </Link>

              <button
                className="relative inline-flex h-10 items-center justify-center rounded-full text-lg text-primary-500"
                onClick={handleDarkMode}
              >
                {darkMode ? (
                  <>
                    <BiSun className="h-6 w-6" />
                  </>
                ) : (
                  <>
                    <BiMoon className="h-6 w-6" />
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
