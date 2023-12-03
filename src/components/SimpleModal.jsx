import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { BiX } from "react-icons/bi";

export default function SimpleModal({ show, message, handleModalClose }) {
  const [isShowing, setIsShowing] = useState(show);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  const hideModal = () => {
    setIsShowing(false);
    handleModalClose();
  };

  return (
    <>
      {/* <button
        onClick={() => setIsShowing(true)}
        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
      >
        <span>Open Modal</span>
      </button> */}

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              <div
                className="flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                <header id="header-2a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    Newsletter Subscription
                  </h3>
                  {/* <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <BiX className="h-5 w-5" />
                    </span>
                  </button> */}
                </header>
                <div id="content-2a" className="flex-1 overflow-auto">
                  <p>{message}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={hideModal}
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
