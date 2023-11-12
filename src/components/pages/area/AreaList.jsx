import PropTypes from "prop-types";
import { Outlet, useParams } from "react-router-dom";

import ListingItems from "../../ListingItems";

const AreaList = ({ areas }) => {
  const { cuisineType } = useParams();
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-3">
            {areas != null && areas.length > 0 && (
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
      </div>
    </section>
  );
};

AreaList.propTypes = {
  areas: PropTypes.array.isRequired,
};

export default AreaList;
