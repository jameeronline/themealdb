import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckboxFilter = ({
  groups,
  selectChange,
  reset,
  widgetHeader,
  itemKey,
  value,
}) => {
  const [searchKey, setSearchkey] = useState("");
  const [initialItems, setInitialItems] = useState(groups);
  const [items, setItems] = useState([]);

  // componentWillMount() {
  //   this.setState({
  //     items: this.state.initialItems
  //   });
  // }

  const searchChange = (value) => {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.strArea.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  };

  return (
    <div>
      <Card>
        <Card.Header>{widgetHeader}</Card.Header>
        <Card.Body>
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={(event) => searchChange(event.target.value)}
          />
          {groups.map((item, index) => {
            return (
              <Form.Check
                key={index}
                // checked={selectedValues.includes(item.strArea) ? true : false}
                type="checkbox"
                label={item.strArea}
                value={item.strArea}
                onChange={(event) => selectChange(event.target.value)}
              />
            );
          })}
          <Button variant="primary">Details</Button>
          <Button variant="danger" onClick={reset}>
            Reset
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckboxFilter;
