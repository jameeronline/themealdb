import { useState, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import { clsx } from "clsx";

//Labels
import LABELS from "../../utils/labelBundle";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const { darkMode, handleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <header className="relative z-20 w-full after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden dark:bg-primary-950">
        <div className="relative mx-auto max-w-full px-6 2xl:container">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <LinkContainer to="/">
              <a
                aria-label={LABELS.HEADER.LOGO}
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg font-bold focus:outline-none lg:flex-1"
                href="javascript:void(0)"
              >
                {LABELS.HEADER.LOGO}
              </a>
            </LinkContainer>
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
              {LABELS.HEADER.NAV.map((item, index) => (
                <li role="none" className="flex items-stretch" key={index}>
                  <NavLink
                    to={item.link}
                    role="menuitem"
                    aria-haspopup="false"
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center gap-2 py-2 transition-colors duration-300 hover:text-primary-500 focus:text-primary-600 focus:outline-none focus-visible:outline-none lg:px-8",
                        isActive ? "underline text-primary-500" : ""
                      )
                    }
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <a
                href="#"
                className="relative inline-flex h-10 items-center justify-center rounded-full text-lg text-primary-500"
                onClick={handleDarkMode}
              >
                {darkMode ? (
                  <>
                    <BiSun className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <BiMoon className="h-5 w-5" />
                  </>
                )}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
