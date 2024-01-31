import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Components
import ListingItems from "components/ListingItems";

//Context
import { DataContext } from "src/context/DataContext";

const AreaList = () => {
  const { areas } = useContext(DataContext);

  return (
    <section>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-2 lg:col-span-2">
          {Array.isArray(areas) && areas.length > 0 && (
            <ListingItems
              title="Areas"
              items={areas}
              itemKey="strArea"
              itemLabel="area"
            />
          )}
        </div>
        <div className="col-span-4 md:col-span-6 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AreaList;
