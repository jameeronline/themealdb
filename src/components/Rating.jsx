import PropTypes from "prop-types";

//Icons
import { BiStar, BiSolidStar } from "react-icons/bi";

function Rating({ stars }) {
  const maxStarValue = 5;

  return (
    <div className="flex items-center gap-1">
      <ul className="inline-flex gap-1">
        {new Array(maxStarValue).fill().map((item, index) => (
          <li key={index}>
            {index < stars ? (
              <BiSolidStar className={"w-5 h-5 fill-primary-400"} />
            ) : (
              <BiStar className="w-5 h-5 fill-primary-400" />
            )}
          </li>
        ))}
      </ul>
      <span className="text-xs text-slate-400">
        ({`${stars} / ${maxStarValue}`})
      </span>
    </div>
  );
}

export default Rating;

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://historical-events-by-api-ninjas.p.rapidapi.com/v1/historicalevents",
  params: {
    text: "roman empire",
  },
  headers: {
    "X-RapidAPI-Key": "bcd6d3e9d7mshce591031afe2639p1525c8jsn2ae581bda33e",
    "X-RapidAPI-Host": "historical-events-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
