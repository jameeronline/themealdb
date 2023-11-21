import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Components
import ListingItems from "../../ListingItems";

//Context
import { DataContext } from "../../context/DataContext";

const AreaList = () => {
  const { areas } = useContext(DataContext);
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

export default AreaList;
