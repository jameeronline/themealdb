import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";

//Event Handler
function handleDetails() {
  console.log("details click");
}

const CheckboxFilter = ({ title, items }) => {
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  const handleSearch = (value) => {
    setSearch(value);

    const updatedItems = items.filter((item) => {
      return item.strArea.toLowerCase().includes(value.toLowerCase());
    });

    setItemsList(updatedItems);
  };

  const handleReset = () => {
    setSearch("");
    setItemsList(items);
  };

  return (
    <div>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Form.Control
            type="text"
            value={search}
            placeholder="Search"
            onChange={(event) => handleSearch(event.target.value)}
          />
          <ul className="list-unstyled form-checkbox-group">
            {itemsList.map((item, index) => {
              return (
                <li key={index}>
                  <Form.Check
                    name="filterArea"
                    // checked={selectedValues.includes(item.strArea) ? true : false}
                    type="checkbox"
                    id={item.strArea}
                    label={item.strArea}
                    value={item.strArea}
                    // onChange={(event) => selectChange(event.target.value)}
                  />
                </li>
              );
            })}
          </ul>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary" onClick={() => handleDetails()}>
            Details
          </Button>
          <Button variant="link" className="text-danger" onClick={handleReset}>
            Reset
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

CheckboxFilter.propTypes = {
  items: PropTypes.array.isRequired,
  // selectChange: PropTypes.func.isRequired,
  // reset:PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  // itemKey: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired
};

export default CheckboxFilter;
