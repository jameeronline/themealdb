import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

//shared components
import Alert from "components/Alert";
import Thumbnail from "components/Thumbnail";
import Spinner from "components/common/Spinner";
import Container from "src/components/shared/Container";

import Select from "react-tailwindcss-select";

//Page Components
import PageHeader from "src/components/PageHeader";
import MealList from "src/components/MealList";

// Icons
import {
  BiGridAlt,
  BiListUl,
  BiArrowBack,
  BiSortAZ,
  BiSortZA,
} from "react-icons/bi";

//context
import { DataContext } from "src/context/DataContext";

//vendor
import sortBy from "sort-by";

//Helper functions
import { capitalizeString } from "src/utils/helperFunc";

//custom Hooks
import useMealsAPI from "src/hooks/useMealAPI";

export default function CategoryDetail() {
  const navigate = useNavigate();
  const { categoryType } = useParams();
  const { categories } = useContext(DataContext);

  const [isGird, setIsGrid] = useState(true);
  const [isSort, setIsSort] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  //const [activeNavLink, setActiveNavLink] = useState("null");

  //category & area filter
  // const [selectedItem, setSelectdItem] = useState({
  //   value: -1,
  //   label: "Select",
  // });

  // const options = categories.map((item) => ({
  //   value: item["strCategory"],
  //   label: item["strCategory"],
  // }));

  const url = `filter.php?c=${categoryType}`;

  const { data, error, isLoading } = useMealsAPI(url);

  useEffect(() => {
    if (data && data.meals) {
      const sortedMeals = [...data.meals].sort(
        sortBy(isSort ? "strMeal" : "-strMeal")
      );
      setSortedData(sortedMeals);
    }
  }, [data, isSort]);

  // useEffect(() => {
  //   setSelectdItem({
  //     value: capitalizeString(activeNavLink),
  //     label: capitalizeString(activeNavLink),
  //   });
  // }, [activeNavLink]);

  // const handleCategoryFilter = (selectedOption) => {
  //   console.log(selectedOption);
  //   setSelectdItem(selectedOption);
  //   navigate(`/category/${selectedOption.value.toLowerCase()}`);
  // };

  //loading
  if (isLoading) {
    return <Spinner />;
  }

  //error
  if (error) {
    return (
      <Alert
        message={error?.message ? error.code + " : " + error.message : null}
      />
    );
  }

  const handleGridChange = () => {
    setIsGrid((prevGrid) => !prevGrid);
  };

  const handleSort = () => {
    setIsSort((prevSort) => !prevSort);
  };

  //check data is empty
  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && (
        <Alert message="There is no meals available on this category" />
      )}
      {!isEmpty && (
        <>
          <PageHeader
            title={capitalizeString(categoryType)}
            subtitle="category"
            summary={`${data?.meals.length} meals found`}
          />

          {/* <Select
            placeholder="Select to filter"
            primaryColor={"emerald"}
            className="w-44 border-primary-500 text-sm"
            options={options}
            value={selectedItem}
            defaultValue={selectedItem}
            onChange={handleCategoryFilter}
          /> */}

          <div className="xl:container mx-auto px-4 mb-10">
            <div className="flex justify-between gap-4 items-center">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex gap-2 h-10 items-center justify-center transition-all duration-300 hover:text-primary-400"
              >
                <BiArrowBack className="w-6 h-6 group-hover:fill-primary-400" />
                <span className="order-2">Back</span>
              </button>

              <div className="flex gap-3 ml-auto">
                <button
                  onClick={handleGridChange}
                  className="flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide transition duration-300 rounded whitespace-nowrap bg-slate-800 text-white border-none hover:bg-slate-950 focus:text-white-700"
                >
                  {isGird ? (
                    <>
                      <BiListUl className="w-5 h-5" />
                      <span className="order-2">List</span>
                    </>
                  ) : (
                    <>
                      <BiGridAlt className="w-4 h-4" />
                      <span className="order-2">Grid</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleSort}
                  className="flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide transition duration-300 rounded whitespace-nowrap bg-slate-800 text-white border-none hover:bg-slate-950 focus:text-white-700"
                >
                  {isSort ? (
                    <>
                      <BiSortAZ className="w-4 h-4" />
                      <span className="order-2">Ascending</span>
                    </>
                  ) : (
                    <>
                      <BiSortZA className="w-4 h-4" />
                      <span className="order-2">Decending</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Container>
            <MealList meals={sortedData} />
          </Container>

          {/* <div className="xl:container mx-auto grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-8 lg:grid-cols-12">
            {sortedData.map((item) => {
              return (
                <div
                  className={`${
                    isGird
                      ? "col-span-4 md:col-span-4 lg:col-span-3"
                      : "col-span-4 md:col-span-8 lg:col-span-6"
                  } `}
                  key={item.idMeal}
                >
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div> */}
        </>
      )}
    </>
  );
}

// export const categoryDetailLoader = async ({ params }) => {
//   const { categoryType } = params;
//   try {
//     const response = await fetch(
//       `www.themealdb.com/api/json/v1/1/filter.php?c=${categoryType}`
//     );
//     return await response.json();
//   } catch (e) {
//     console.log(e.message);
//   }
// };
