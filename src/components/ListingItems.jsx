import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ListingItems = ({ title, items, itemKey, itemLabel }) => {
  return (
    <>
      <div className="overflow-hidden bg-white rounded text-slate-500 border border-slate-200">
        <h3 className="px-6 py-4 text-lg text-slate-700 font-bold bg-gray-50">
          {title}
        </h3>
        <div className="p-6 border-t border-slate-200">
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
        </div>
      </div>
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
