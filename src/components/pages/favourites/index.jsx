import { useContext } from "react";

import Thumbnail from "components/Thumbnail";
import Empty from "src/components/common/Empty";

//Context
import { ThemeContext } from "components/context/ThemeContext";

export default function Favourites() {
  const { favourites } = useContext(ThemeContext);

  return (
    <>
      {favourites.length < 1 && <Empty />}
      {/* Meal Grid */}
      {favourites.length > 0 && (
        <>
          <div className="flex justify-center items-baseline mb-12 gap-2">
            <h1 className="text-2xl font-bold">Favourites List</h1>

            <span className="text-sm font-normal">
              ({favourites.length} meals found)
            </span>
          </div>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {favourites.map((item) => {
              return (
                <div className="col-span-4 lg:col-span-3" key={item.idMeal}>
                  <Thumbnail item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
