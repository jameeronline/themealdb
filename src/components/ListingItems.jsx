import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import ListItemsContainer from "./ListItemsContainer";
import ListItemsTitle from "./ListItemsTitle";
import ListItemsBody from "./ListItemsBody";

const ListingItems = ({ title, items, itemKey, itemLabel }) => {
  return (
    <>
      <ListItemsContainer>
        <ListItemsTitle title={title} />
        <ListItemsBody>
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/${itemLabel}/${item[itemKey].toLowerCase()}`}
                    className={`flex p-2 px-4 transition-all duration-300 hover:text-emerald-500 hover:bg-emerald-50 aria-[current]:rounded aria-[current]:bg-emerald-500  aria-[current]:text-white`}
                  >
                    {item[itemKey]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </ListItemsBody>
      </ListItemsContainer>
    </>
  );
};

// Props Validation
ListingItems.propTypes = {
  itemLabel: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ListingItems;
