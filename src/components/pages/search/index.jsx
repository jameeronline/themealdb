import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import Spinner from "../../Spinner";
import RecipieThumb from "../../RecipieThumb";
import Alert from "../../AlertError";

import { BiX } from "react-icons/bi";

import { fetchSearch } from "../../../utils/dataLayer";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const searchedMeals = await fetchSearch(searchTerm);
    console.log(searchedMeals);
    setItems(searchedMeals);
    setIsLoading(false);
  };

  const resetSearch = (e) => {
    e.preventDefault();

    setItems([]);
    setSearchTerm("");

    searchInput.current.focus();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Search</h1>
        <div className="relative my-6">
          <form onSubmit={handleSubmit}>
            <input
              ref={searchInput}
              id="id-l11"
              type="text"
              name="id-l11"
              value={searchTerm}
              placeholder="Discover recipes from around the world..."
              className="peer relative h-12 w-full rounded border border-slate-200 px-4 pl-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed" />
            <button
              type="button"
              onClick={resetSearch}
              className="absolute top-3 right-4 h-6 w-6 inline-flex items-center justify-center stroke-slate-400 peer-disabled:cursor-not-allowed"
            >
              <BiX className="w-5 h-5" />
            </button>
          </form>
        </div>

        {isLoading && <Spinner />}

        {!Array.isArray(items) && <Alert />}
      </div>
      {/* Meal Grid */}
      <div className="mt-10">
        {items !== null && items.length > 0 && (
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {items.map((item) => {
              return (
                <div className="col-span-3" key={item.idMeal}>
                  <RecipieThumb item={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
