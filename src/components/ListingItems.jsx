import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-tailwindcss-select";

import PropTypes from "prop-types";

//utilities
import { cn } from "src/utils/helperFunctions";

//Helper functions
import { capitalizeString } from "src/utils/helperFunctions";

const ListingItems = ({
  title,
  items,
  itemKey,
  itemLabel,
  selectedItem = "",
  setSelectdItem,
}) => {
  //console.log(items);
  const navigate = useNavigate();
  const [activeNavLink, setActiveNavLink] = useState("null");

  const options = items.map((item) => ({
    value: item[itemKey],
    label: item[itemKey],
  }));

  //category & area filter
  //const [selectedItem, setSelectdItem] = useState(options[0]);

  // useEffect(() => {
  //   setSelectdItem({
  //     value: capitalizeString(activeNavLink),
  //     label: capitalizeString(activeNavLink),
  //   });
  // }, [activeNavLink]);

  const handleCategoryFilter = (selectedOption) => {
    setSelectdItem(selectedOption);
    setSelectdItem(selectedOption.value);
    navigate(`${selectedOption.value.toLowerCase()}`);
  };

  const handleClick = (name) => {
    setActiveNavLink(name);
    //console.log("clicked", name);
  };

  const listItemsArray = items.map((item, index) => {
    return (
      <li key={index}>
        <NavLink
          to={`/${itemLabel}/${item[itemKey].toLowerCase()}`}
          onClick={() => handleClick(item[itemKey])}
          className={({ isActive }) =>
            cn(
              "flex py-2 px-6 transition-all duration-300 rounded hover:text-primary-500 hover:bg-primary-50",
              isActive &&
                "bg-primary-500 text-white hover:bg-primary-500 hover:text-white"
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
      {/* <PageHeader
          title={capitalizeString(selectedItem)}
          subtitle="listing"
          summary="25"
        /> */}
      {/* <Select
        placeholder="Select to filter"
        primaryColor={"emerald"}
        className="w-44 border-primary-500 text-sm"
        options={options}
        value={selectedItem}
        // defaultValue={selectedItem}
        onChange={handleCategoryFilter}
      /> */}
      <ul className="flex flex-wrap gap-2">{listItemsArray}</ul>
      {/* <ListItemsContainer>
        <ListItemsTitle title={title} />
        <ListItemsBody>{listItemsArray}</ListItemsBody>
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
