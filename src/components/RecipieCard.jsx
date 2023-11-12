import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import ShowModalDialog from "./ShowModalDialog";

import PropTypes from "prop-types";

const RecipieCard = ({ item }) => {
  return (
    <Card style={{ maxWidth: "15rem" }}>
      <Card.Img variant="top" src={item.strCategoryThumb} />
      <Card.Body>
        <Card.Title>{item.strCategory}</Card.Title>
        <Card.Text>{item.strCategoryDescription}</Card.Text>
        <Button variant="primary">Details</Button>
        {/* <ShowModalDialog details={item} /> */}
      </Card.Body>
    </Card>
  );
};

RecipieCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RecipieCard;
