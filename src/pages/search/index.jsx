import { useState, useEffect } from "react";
import { useDataContext } from "src/context/DataContext";

//import useSWR from "swr";
import Select from "react-tailwindcss-select";
import { matchSorter } from "match-sorter";
import { useLoaderData } from "react-router-dom";

//components
import Alert from "components/Alert";
import Empty from "src/components/common/Empty";
import Button from "src/components/Button";

//label bundle
import PageHeader from "src/components/PageHeader";

//Search Form
import FormSearch from "./FormSearch";

//Helper functions
import { fetcher, hasData } from "src/utils/helperFunctions";

//React Query
import { useSearchMeals } from "src/api-services/queries";

//label bundle
import LABELS from "src/utils/labelBundle";
import MealList from "src/components/MealList";
import { Container } from "src/components/shared";

export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return q;
}

export default function Search() {
  const labels = LABELS.PAGES.SEARCH;
  const q = useLoaderData() || "";
  console.log(q);

  //search state
  const [searchKeyword, setSearchKeyword] = useState(q);

  //category & area filter
  // const [selectedCategory, setSelectedCategory] = useState({
  //   value: null,
  //   label: "Select",
  // });

  //const { categories } = useDataContext();
  //console.log(categories);

  //const { categories } = useContext(DataContext);

  // const options = categories?.map((item) => ({
  //   value: item.strCategory,
  //   label: item.strCategory,
  // }));

  //options.unshift({ value: null, label: "Select All" });

  const { data, error, isLoading, isError, isSuccess } =
    useSearchMeals(searchKeyword);

  console.log("to check is array", Array.isArray(data?.meals));

  // const handleCategoryFilter = (selectedOption) => {
  //   setSelectedCategory(selectedOption);
  // };

  // const filterResults = (data) => {
  //   // if (selectedCategory.value) {
  //   //   return matchSorter(data, selectedCategory.value, {
  //   //     keys: ["strCategory"],
  //   //   });
  //   // } else {
  //   return data;
  //   //}
  // };

  //is empty
  const isEmpty = Array.isArray(data?.meals) ? hasData(data?.meals) : false;
  console.log(isEmpty);

  console.log(data);
  // if (isEmpty) {
  //   return "<div>Its Empty</div>";
  // }

  return (
    <>
      <div className="">
        <PageHeader title={labels.TITLE} />
        <div className="max-w-3xl mx-auto">
          <FormSearch
            setSearchKeyword={setSearchKeyword}
            isLoading={isLoading}
            query={q}
          />

          {/* verify API return(API Errors) & Display error */}
          {isError && <Alert message={error.message} />}

          {/* There is no results & Display Error */}
          {!isEmpty && isSuccess && searchKeyword != "" && (
            <Alert message="No recipes match your search criteria. Please refine your search and try again." />
          )}
        </div>
      </div>
      <Container>
        {/* Display Results Grid */}
        {Array.isArray(data?.meals) && data?.meals.length > 0 && (
          <div className="mt-10">
            {/* Result Heading */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold inline-flex items-baseline gap-2">
                Search Results
                {data?.meals.length > 0 && (
                  <span className="text-sm font-normal">
                    ({data?.meals.length} meals found)
                  </span>
                )}
              </h1>
              {/* <div className="w-44">
                <Select
                  placeholder="Select to filter"
                  primaryColor={"emerald"}
                  className="w-44 border-primary-500 text-sm"
                  options={options}
                  value={selectedCategory}
                  defaultValue={selectedCategory}
                  onChange={handleCategoryFilter}
                />
              </div> */}
            </div>

            {/* Result filtering */}
            {data?.meals.length < 1 && <Empty />}
            <MealList meals={data?.meals || []} />
          </div>
        )}
      </Container>
    </>
  );
}
