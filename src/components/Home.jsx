import { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import Custom Components
//import ShowMeal from "./components/MealCard";
// import CheckboxFilter from "./CheckboxFilter";
// import RadioFilter from "./ListingItems";

import RecipieCard from "./RecipieCard";

//Import Custom Components
// import CategoryList from "./CategoryList";
// import CategoryDetails from "./CategoryDetails";
// import MealDetail from "./MealDetail";

const Home = ({ categoryDetails }) => {
  // const [meals, setMeals] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(
  //   new Array(categories.length).fill(false)
  // );
  // const [selectedArea, setSelectedArea] = useState(
  //   new Array(areas.length).fill(false)
  // );
  // const [filteredMeals, setFilteredMeals] = useState([]);

  // // UI States
  // const [layout, setLayout] = useState("grid");
  // const [pageLength, setPageLength] = useState(6);
  // const [activePage, setActivePage] = useState(0);

  // const selectCategory = (value) => {
  //   this.setState({
  //     selectedCategory: value,
  //   });
  // };

  // const selectArea = (value) => {
  //   var selectedValue = value;
  //   var previousValue = selectedArea;
  //   if (previousValue.includes(selectedValue)) {
  //     previousValue = previousValue.filter(function (currentValue) {
  //       return currentValue !== value;
  //     });
  //   } else {
  //     previousValue.push(value);
  //   }

  //   var filteredList = meals;
  //   filteredList = filteredList.filter(function (item) {
  //     console.log(previousValue.toString().toLowerCase());
  //     return (
  //       previousValue
  //         .toString()
  //         .toLowerCase()
  //         .search(item.strArea.toLowerCase()) !== -1
  //     );
  //   });

  //   console.log(filteredList.length);

  //   this.setState({
  //     selectedArea: previousValue,
  //     filteredMeals: filteredList,
  //   });
  // };

  // const checkboxFilter = (itemVal, selectedArray) => {
  //   for (var i = 0; i < selectedArray.length; i++) {
  //     if (selectedArray[i] === itemVal) {
  //       return true;
  //     }
  //   }
  // };

  // const resetcheckboxFilter = () => {
  //   this.setState({
  //     selectedArea: [],
  //   });
  // };

  // const changeLayout = (val) => {
  //   this.setState({
  //     layout: val,
  //   });
  // };

  // const onCategoryChange = (val) => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + val)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((myJson) => {
  //       this.setState({
  //         meals: myJson.meals,
  //       });
  //     });
  // };

  // const showPagination = () => {
  //   var items = [];
  //   //var active = active;
  //   if (meals !== null) {
  //     console.log(meals.length);
  //     for (
  //       let number = 1;
  //       number <= Math.ceil(meals.length / pageLength);
  //       number++
  //     ) {
  //       items.push(
  //         <Pagination.Item onClick={console.log(number)} key={number}>
  //           {number}
  //         </Pagination.Item>
  //       );
  //     }
  //     return items;
  //   }
  // };

  return (
    <Container fluid>
      <Row>
        <h1>Home Page</h1>
        <section>
          <header className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8">Categories</h1>
            <p className="text-base text-gray-500 font-sans text-center">
              Explore our food category for a delightful collection of recipes.
              From savory dishes to sweet treats, discover a variety of culinary
              delights tailored to satisfy every taste. Dive into a world of
              simple and clean flavors that make every meal a joyous experience.
            </p>
          </header>

          {/* Category Grid */}
          <div className="mt-10">
            {categoryDetails !== null && categoryDetails.length > 0 && (
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                {categoryDetails
                  .filter((item, index) => index < 12)
                  .map((item, index) => {
                    return (
                      <div className="col-span-2" key={index}>
                        <RecipieCard item={item} key={item.idCategory} />
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </section>
        <Link to="/area">Area Cusine</Link>
        {/* <Col sm={3}>
          <Link to="/category">Category</Link>
          {categories != null && categories.length > 0 && (
            <RadioFilter
              title="Category"
              items={categories}
              // value={selectedCategory}
              // selectchange={selectCategory}
              // itemKey="strCategory"
              // filterKey="radio"
            />
          )}
          {areas != null && areas.length > 0 && (
            <CheckboxFilter
              title="Area"
              items={areas}
              // value={selectedArea}
              // selectChange={selectArea}
              // reset={resetcheckboxFilter}
              // itemKey="strArea"
            />
          )}
        </Col> */}
        <Col sm={9}></Col>
      </Row>
    </Container>
  );
};

//Prop validation
Home.propTypes = {
  categoryDetails: PropTypes.array.isRequired,
};

export default Home;
