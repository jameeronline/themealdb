import React, { useState } from "react";

export default function Alert() {
  const [dismiss, setDismiss] = useState(false);

  return (
    <>
      <div
        className={`${
          dismiss && "hidden"
        } flex w-full items-center gap-4 rounded border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-pink-500`}
        role="alert"
      >
        {/*  <!-- Text --> */}
        <p className="flex-1">
          Danger! There is no meals available at the moment with search key
        </p>
        {/*  <!-- Close button --> */}
        <button
          aria-label="Close"
          className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs font-medium tracking-wide text-pink-500 transition duration-300 hover:bg-pink-100 hover:text-pink-600 focus:bg-pink-200 focus:text-pink-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-pink-300 disabled:shadow-none disabled:hover:bg-transparent"
          onClick={() => setDismiss(true)}
        >
          <span className="relative only:-mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-14 desc-14"
            >
              <title id="title-14">Icon title</title>
              <desc id="desc-14">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
