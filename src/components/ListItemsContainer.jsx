import React from "react";
import PropTyes from "prop-types";

const ListItemsContainer = ({ children }) => {
  return (
    <>
      <div className="overflow-hidden bg-white rounded text-slate-500 border border-slate-200">
        {children}
      </div>
    </>
  );
};
// Props Validation
// ListItemsContainer.propTypes = {
//   children: PropTypes.string.isRequired,
//   itemKey: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   items: PropTypes.array.isRequired,
// };

export default ListItemsContainer;
