import { useState, useContext, useEffect } from "react";
import { DataContext } from "src/components/context/DataContext";

import useSWR from "swr";
import Select from "react-tailwindcss-select";
import { matchSorter } from "match-sorter";

//components
import Thumbnail from "components/Thumbnail";
import Alert from "components/Alert";
import Empty from "src/components/common/Empty";

//Search Form
import FormSearch from "./FormSearch";

//Helper functions
import { fetcher } from "src/utils/helperFunc";

//label bundle
import LABELS from "src/utils/labelBundle";

export default function Search() {
  const labels = LABELS.PAGES.SEARCH;

  //search state
  const [searchKeyword, setSearchKeyword] = useState("");

  //category & area filter
  const [selectedCategory, setSelectedCategory] = useState({
    value: null,
    label: "Select",
  });

  const { categories } = useContext(DataContext);
  const options = categories.map((item) => ({
    value: item.strCategory,
    label: item.strCategory,
  }));

  options.unshift({ value: null, label: "Select All" });

  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}/search.php?s=`;

  const { data, error, isLoading } = useSWR(
    () => (searchKeyword != "" ? `${API_URL}${searchKeyword}` : null),
    fetcher
  );

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

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <FormSearch setSearchKeyword={setSearchKeyword} isLoading={isLoading} />

        {/* verify API return(API Errors) & Display error */}
        {error && <Alert message={error.message} />}

        {/* There is no results & Display Error */}
        {data && data.meals === null && (
          <Alert
            message={
              "There is no recipies available in this search key. Please refine your search"
            }
          />
        )}
      </div>

      {/* Display Results Grid */}
      {data && data.meals && (
        <div className="mt-10">
          {/* Result Heading */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
              Search Results
              {filterResults(data.meals).length > 0 && (
                <span className="text-sm font-normal">
                  ({filterResults(data.meals).length} meals found)
                </span>
              )}
            </h1>
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

          {/* Result filtering */}
          {filterResults(data.meals).length < 1 && <Empty />}

          {/* final Result Display */}
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
