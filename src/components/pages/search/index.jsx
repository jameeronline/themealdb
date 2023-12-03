import { useState, useRef, useId } from "react";
import { BiSearch } from "react-icons/bi";

//components
import InlineSpinner from "components/InlineSpinner";
import Thumbnail from "components/Thumbnail";
import Alert from "components/Alert";

import { BiX } from "react-icons/bi";

import { fetchSearch } from "src/utils/dataLayer";

//label bundle
import LABELS from "src/utils/labelBundle";

export default function Search() {
  const labels = LABELS.PAGES.SEARCH;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const id = useId();

  const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm == "") {
      return;
    }

    setIsLoading(true);

    const { data, errorMsg } = await fetchSearch(searchTerm);
    setItems(data);
    setIsLoading(false);
    setShowError(errorMsg);
  };

  const resetSearch = (e) => {
    e.preventDefault();

    setItems([]);
    setSearchTerm("");
    setShowError("");

    searchInput.current.focus();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{labels.TITLE}</h1>
          {/* loadding */}
          {isLoading && <InlineSpinner className="w-6 h-6" />}
        </div>

        <div className="relative my-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor={`search-${id}`} className="sr-only">
              Search input
            </label>
            <input
              autoFocus
              ref={searchInput}
              id={`search-${id}`}
              type="text"
              name={`search-${id}`}
              value={searchTerm}
              placeholder={labels.INPUT_PLACEHOLDER}
              className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className="transition-colors duration-300 absolute top-3 left-4 h-6 w-6 peer-focus:fill-primary-500 peer-disabled:cursor-not-allowed" />
            <button
              type="button"
              onClick={resetSearch}
              className={`${
                !searchTerm && "hidden"
              } absolute top-3 right-4 h-6 w-6 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed`}
            >
              <BiX className="w-6 h-6" />
            </button>
          </form>
          <small className="flex justify-between w-full mt-2 py-1 text-xs transition text-slate-400 ">
            <span>{labels.INPUT_HELP_TEXT}</span>
          </small>
        </div>
        {/* verify API return(API Errors) & Display error */}
        {showError !== "" && <Alert message={showError} />}
        {/* There is no results & Display Error */}
        {!Array.isArray(items) && (
          <Alert
            message={
              "There is no available meals in this search key. Please refine your search"
            }
          />
        )}
      </div>

      {/* Meal Grid */}
      {Array.isArray(items) && items.length > 0 && (
        <div className="mt-10">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {items.map((item) => {
              return (
                <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
