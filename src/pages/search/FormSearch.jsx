import { useRef, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { Form, useSubmit } from "react-router-dom";
import { BiX, BiSearch } from "react-icons/bi";
import LABELS from "src/utils/labelBundle";

export default function FormSearch({ setSearchKeyword, query }) {
  const labels = LABELS.PAGES.SEARCH;
  const searchInput = useRef(null);
  const submit = useSubmit();
  const searchId = useId();

  useEffect(() => {
    // Set input value on mount
    //if (searchInput.current) {
    searchInput.current.value = query;
    //}
  }, [query]); // Update input value when query changes

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchInput.current.value.trim();

    if (searchValue === "") {
      return;
    }

    setSearchKeyword(searchValue);
  };

  const resetSearch = (e) => {
    e.preventDefault();
    searchInput.current.value = "";
    setSearchKeyword("");
    submit(e.currentTarget.form);
    searchInput.current.focus();
  };

  return (
    <div className="relative mb-6">
      <Form onSubmit={handleSubmit} className="relative">
        <label htmlFor={searchId} className="sr-only">
          Search input
        </label>
        <input
          autoFocus
          ref={searchInput}
          type="text"
          id={searchId}
          name="q"
          defaultValue={query}
          placeholder={labels.INPUT_PLACEHOLDER}
          className="peer relative h-16 w-full rounded border border-slate-200 px-4 pl-16 pr-44 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary-300 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <BiSearch className="transition-colors duration-300 absolute top-3 left-4 h-10 w-10 fill-typo-400 peer-focus:fill-primary-300 peer-disabled:cursor-not-allowed" />
        {query && (
          <button
            type="button"
            onClick={resetSearch}
            className="absolute top-3 right-32 h-10 w-10 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed"
          >
            <BiX className="w-10 h-10 fill-slate-400" />
          </button>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="absolute top-1 right-1 stroke-slate-400 peer-disabled:cursor-not-allowed inline-flex gap-4 cursor-pointer items-center justify-center rounded border-0 border-primary-500 bg-primary-500 px-8 h-14 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
        >
          Search
        </button>
      </Form>
      <small className="flex justify-between w-full mt-2 py-1 text-xs transition text-slate-400">
        <span>{labels.INPUT_HELP_TEXT}</span>
      </small>
    </div>
  );
}

FormSearch.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
