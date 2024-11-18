import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//shared components
import Alert from "components/Alert";
import Spinner from "components/common/Spinner";
import Container from "src/components/shared/Container";

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
import { useDataContext } from "src/context/DataContext";

//react query
import { useAreaMeals } from "src/api-services/queries";

//vendor
import sortBy from "sort-by";

//Helper functions
import { capitalizeString, hasData } from "src/utils/helperFunctions";

export default function AreaDetail() {
  const navigate = useNavigate();
  const { cuisineType } = useParams();
  const { areas } = useDataContext();

  const [isGird, setIsGrid] = useState(true);
  const [isSort, setIsSort] = useState(true);
  const [sortedData, setSortedData] = useState([]);

  //category & area filter
  const [selectedItem, setSelectdItem] = useState();

  //const url = `filter.php?a=${cuisineType}`;

  //const { data, error, isLoading } = useMealsAPI(url);
  const { data, error, isLoading, isError } = useAreaMeals(cuisineType ?? "");

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

  const handleCategoryFilter = (e) => {
    console.log(e.target.value);
    const selectedOption = e.target.value;
    console.log(selectedOption);
    setSelectdItem(selectedOption);
    navigate(`/area/${selectedOption.toLowerCase()}`);
  };

  //loading
  if (isLoading) {
    return <Spinner />;
  }

  //error
  if (isError) {
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

  return (
    <>
      {hasData(data?.meals) ? (
        <>
          <PageHeader
            title={capitalizeString(cuisineType)}
            subtitle="cusine"
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
              <div className="flex items-center gap-3">
                {/* <button
                  onClick={() => navigate(-1)}
                  className="group inline-flex gap-2 h-10 items-center justify-center transition-all duration-300 hover:text-primary-400"
                >
                  <BiArrowBack className="w-6 h-6 group-hover:fill-primary-400" />
                  <span className="order-2">Back</span>
                </button> */}
                <label htmlFor="change-category" className="font-bold">
                  Change Cusine
                </label>
                <select
                  name=""
                  id="change-category"
                  onChange={handleCategoryFilter}
                  value={selectedItem}
                >
                  {areas.map((item, index) => (
                    <option key={index}>{item.strArea}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 ml-auto">
                <button
                  onClick={handleGridChange}
                  className="flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide transition duration-300 rounded whitespace-nowrap bg-slate-800 text-white border-none hover:bg-slate-950 focus:text-white-700"
                >
                  {isGird ? (
                    <>
                      <BiListUl className="w-6 h-6" />
                      <span className="order-2">List</span>
                    </>
                  ) : (
                    <>
                      <BiGridAlt className="w-6 h-6" />
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
                      <BiSortAZ className="w-6 h-6" />
                      <span className="order-2">Ascending</span>
                    </>
                  ) : (
                    <>
                      <BiSortZA className="w-6 h-6" />
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
        </>
      ) : (
        <Alert message="There is no meals available on this category" />
      )}
    </>
  );
}

// export const categoryDetailLoader = async ({ params }) => {
//   const { cuisineType } = params;
//   try {
//     const response = await fetch(
//       `www.themealdb.com/api/json/v1/1/filter.php?c=${cuisineType}`
//     );
//     return await response.json();
//   } catch (e) {
//     console.log(e.message);
//   }
// };
