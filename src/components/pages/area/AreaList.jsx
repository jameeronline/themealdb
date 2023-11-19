import { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";

import ListingItems from "../../ListingItems";

const AreaList = ({ areas }) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-3">
          {Array.isArray(areas) && areas.length > 0 && (
            <ListingItems
              title="Areas"
              items={areas}
              itemKey="strArea"
              itemLabel="area"
            />
          )}
        </div>
        <div className="col-span-4 lg:col-span-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

AreaList.propTypes = {
  areas: PropTypes.array.isRequired,
};

export default AreaList;
