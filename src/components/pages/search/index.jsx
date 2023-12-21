import { useState, useRef, useId, useContext } from "react";
import { DataContext } from "src/components/context/DataContext";

import useSWR from "swr";
//import Select from "react-select";
import Select from "react-tailwindcss-select";
import { matchSorter } from "match-sorter";
import clsx from "clsx";
import classNames from "classnames";

//components
import InlineSpinner from "src/components/common/InlineSpinner";
import Thumbnail from "components/Thumbnail";
import Alert from "components/Alert";
//import Spinner from "src/components/common/Spinner";
import Empty from "src/components/common/Empty";

//import DropdownBasic from "./DropdownSelect";

//Icons
import { BiX, BiSearch } from "react-icons/bi";

//Helper functions
//import { capitalizeString } from "src/utils/helperFunc";
import { fetcher } from "src/utils/helperFunc";

//import { fetchSearch } from "src/utils/dataLayer";

//label bundle
import LABELS from "src/utils/labelBundle";

export default function Search() {
  const labels = LABELS.PAGES.SEARCH;

  //search state
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //category & area filter
  const [selectedCategory, setSelectedCategory] = useState({
    value: null,
    label: "Select",
  });
  //const [selectedArea, setSelectedArea] = useState(null);

  const id = useId();
  const searchInput = useRef(null);

  const { categories } = useContext(DataContext);
  const options = categories.map((item) => ({
    value: item.strCategory,
    label: item.strCategory,
  }));

  options.unshift({ value: null, label: "Select All" });

  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}/search.php?s=`;

  const { data, error, isLoading } = useSWR(
    () => (searchTerm != "" ? `${API_URL}${searchTerm}` : null),
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchInput.current.value == "") {
      return;
    }

    setSearchTerm(searchKey);
  };

  const resetSearch = (e) => {
    e.preventDefault();

    setSearchTerm("");
    setSearchKey("");
    searchInput.current.focus();
  };

  const handleCategoryFilter = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const filterResults = (data) => {
    if (selectedCategory.value) {
      return matchSorter(data, selectedCategory.value, {
        keys: ["strCategory"],
      });
    } else {
      return data;
    }
  };

  const myOptions = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
  ];

  // const handleMyOptions = (value) => {
  //   console.log(value);
  // };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{labels.TITLE}</h1>
          {/* loadding */}
          {isLoading && <InlineSpinner className="w-6 h-6" />}
        </div>

        {/* Search Form */}
        <div className="relative my-6">
          <form onSubmit={handleSubmit} className="">
            <label htmlFor={`search-${id}`} className="sr-only">
              Search input
            </label>
            <input
              autoFocus
              ref={searchInput}
              id={`search-${id}`}
              type="text"
              name={`search-${id}`}
              value={searchKey}
              placeholder={labels.INPUT_PLACEHOLDER}
              className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <BiSearch className="transition-colors duration-300 absolute top-3 left-4 h-6 w-6 peer-focus:fill-primary-500 peer-disabled:cursor-not-allowed" />
            <button
              type="button"
              onClick={resetSearch}
              className={`${
                !searchKey && "hidden"
              } absolute top-3 right-24 h-6 w-6 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed`}
            >
              <BiX className="w-6 h-6 fill-slate-400" />
            </button>

            <button
              type="submit"
              className="absolute top-1 right-1 stroke-slate-400 peer-disabled:cursor-not-allowed inline-flex gap-4 cursor-pointer items-center justify-center rounded border-0 border-primary-500 bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Search
            </button>
          </form>
          <small className="flex justify-between w-full mt-2 py-1 text-xs transition text-slate-400 ">
            <span>{labels.INPUT_HELP_TEXT}</span>
          </small>
        </div>

        {/* verify API return(API Errors) & Display error */}
        {error && <Alert message={error.message} />}

        {/* There is no results & Display Error */}
        {data && data.meals === null && (
          <Alert
            message={
              "There is no available meals in this search key. Please refine your search"
            }
          />
        )}
      </div>

      {/* Display Results Grid */}
      {data && data.meals && (
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
              Search Results
              {filterResults(data.meals).length > 0 && (
                <span className="text-sm font-normal">
                  ({filterResults(data.meals).length} meals found)
                </span>
              )}
            </h1>
            {/* <DropdownBasic /> */}
            <div className="w-44">
              <Select
                placeholder="Select to filter"
                primaryColor={"emerald"}
                className="w-44 border-primary-500 text-sm"
                options={options}
                value={selectedCategory}
                defaultValue={selectedCategory}
                onChange={handleCategoryFilter}
              />
            </div>
          </div>
          {filterResults(data.meals).length < 1 && <Empty />}
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {filterResults(data.meals).length > 0 &&
              filterResults(data.meals).map((item) => {
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
