import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

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
                    className={({ isActive }) =>
                      clsx(
                        "flex p-2 px-4 transition-all duration-300 ",
                        isActive
                          ? "rounded bg-primary-500 text-white"
                          : "hover:text-primary-500 hover:bg-primary-50"
                      )
                    }
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
