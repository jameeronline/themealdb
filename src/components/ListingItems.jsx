import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-tailwindcss-select";

import clsx from "clsx";

import ListItemsContainer from "./ListItemsContainer";
import ListItemsTitle from "./ListItemsTitle";
import ListItemsBody from "./ListItemsBody";
import PageHeader from "./PageHeader";

//Helper functions
import { capitalizeString } from "src/utils/helperFunc";

const ListingItems = ({
  title,
  items,
  itemKey,
  itemLabel,
  selectedCategory = "dummy",
  setSelectedCategory,
}) => {
  //console.log(items);
  const navigate = useNavigate();
  const [activeNavLink, setActiveNavLink] = useState("null");

  const options = items.map((item) => ({
    value: item[itemKey],
    label: item[itemKey],
  }));

  //category & area filter
  const [selectedItem, setSelectdItem] = useState(options[0]);

  useEffect(() => {
    setSelectdItem({
      value: capitalizeString(activeNavLink),
      label: capitalizeString(activeNavLink),
    });
  }, [activeNavLink]);

  const handleCategoryFilter = (selectedOption) => {
    setSelectdItem(selectedOption);
    setSelectedCategory(selectedOption.value);
    navigate(`${selectedOption.value.toLowerCase()}`);
  };

  const handleClick = (name) => {
    setActiveNavLink(name);
    console.log("clicked", name);
  };

  const listItemsArray = items.map((item, index) => {
    return (
      <li key={index}>
        <NavLink
          to={`/${itemLabel}/${item[itemKey].toLowerCase()}`}
          onClick={() => handleClick(item[itemKey])}
          className={({ isActive }) =>
            clsx(
              "flex py-2 px-6 transition-all duration-300 rounded-full",
              isActive
                ? "bg-primary-500 text-white"
                : "hover:text-primary-500 hover:bg-primary-50"
            )
          }
        >
          {item[itemKey]}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="">
        {/* <PageHeader
          title={capitalizeString(selectedCategory)}
          subtitle="listing"
          summary="25"
        /> */}
        <Select
          placeholder="Select to filter"
          primaryColor={"emerald"}
          className="w-44 border-primary-500 text-sm"
          options={options}
          value={selectedItem}
          // defaultValue={selectedItem}
          onChange={handleCategoryFilter}
        />
      </div>
      <ul className="flex gap-2">{listItemsArray}</ul>
      {/* <ListItemsContainer>
        <ListItemsTitle title={title} />
        <ListItemsBody></ListItemsBody>
      </ListItemsContainer> */}
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
