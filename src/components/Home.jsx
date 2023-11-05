import { useState, useEffect } from "react";

//import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
// import Pagination from "react-bootstrap/Pagination";
// import ReactPaginate from "react-paginate";

//Import Components
//import ShowMeal from "./components/MealCard";
import CheckboxFilter from "./CheckboxFilter";
import RadioFilter from "./RadioFilter";

//Import Custom Components
// import CategoryList from "./CategoryList";
// import CategoryDetails from "./CategoryDetails";
// import MealDetail from "./MealDetail";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [area, setArea] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [pageLength, setPageLength] = useState(6);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    //fetch categories
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCategories(response.meals);
      });

    //fetch area/cusine
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setArea(response.meals);
      });
  }, []);

  const selectCategory = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };

  const selectArea = (value) => {
    var selectedValue = value;
    var previousValue = selectedArea;
    if (previousValue.includes(selectedValue)) {
      previousValue = previousValue.filter(function (currentValue) {
        return currentValue !== value;
      });
    } else {
      previousValue.push(value);
    }

    var filteredList = meals;
    filteredList = filteredList.filter(function (item) {
      console.log(previousValue.toString().toLowerCase());
      return (
        previousValue
          .toString()
          .toLowerCase()
          .search(item.strArea.toLowerCase()) !== -1
      );
    });

    console.log(filteredList.length);

    this.setState({
      selectedArea: previousValue,
      filteredMeals: filteredList,
    });
  };

  const checkboxFilter = (itemVal, selectedArray) => {
    for (var i = 0; i < selectedArray.length; i++) {
      if (selectedArray[i] === itemVal) {
        return true;
      }
    }
  };

  const resetcheckboxFilter = () => {
    this.setState({
      selectedArea: [],
    });
  };

  const changeLayout = (val) => {
    this.setState({
      layout: val,
    });
  };

  const onCategoryChange = (val) => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + val)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          meals: myJson.meals,
        });
      });
  };

  const showPagination = () => {
    var items = [];
    //var active = active;
    if (meals !== null) {
      console.log(meals.length);
      for (
        let number = 1;
        number <= Math.ceil(meals.length / pageLength);
        number++
      ) {
        items.push(
          <Pagination.Item onClick={console.log(number)} key={number}>
            {number}
          </Pagination.Item>
        );
      }
      return items;
    }
  };

  return (
    <Container>
      <h1>Home Page</h1>
      <Row>
        <Col>
          {area.length}
          {area.length > 0 && (
            <>
              <CheckboxFilter
                groups={area}
                value={selectedArea}
                selectChange={selectArea}
                reset={resetcheckboxFilter}
                itemKey="strArea"
                widgetHeader="Area"
              />
            </>
          )}
          {categories != null && (
            <RadioFilter
              groups={categories}
              value={selectedCategory}
              selectchange={selectCategory}
              itemKey="strCategory"
              widgetHeader="Category"
              filterKey="radio"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
