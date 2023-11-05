import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RadioFilter = ({
  widgetHeader,
  groups,
  itemKey,
  filterKey,
  value,
  selectchange,
}) => {
  return (
    <div>
      <Card>
        <Card.Header>{widgetHeader}</Card.Header>
        <Card.Body>
          {groups.map((item, index) => {
            return (
              <Form.Check
                key={index}
                checked={item.strCategory === value ? true : false}
                type={filterKey}
                label={item.strCategory}
                value={item.strCategory}
                onChange={(event) => selectchange(event.target.value)}
              />
            );
          })}
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RadioFilter;
