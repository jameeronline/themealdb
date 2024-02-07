import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { BiChevronDown } from "react-icons/bi";

const countries = [
  { id: 1, name: "China" },
  { id: 2, name: "India" },
  { id: 3, name: "United States" },
  { id: 4, name: "Indonesia" },
  { id: 5, name: "Pakistan" },
  { id: 6, name: "Brazil" },
  { id: 7, name: "Nigeria" },
  { id: 8, name: "Bangladesh" },
  { id: 9, name: "Russia" },
  { id: 10, name: "Mexico" },
  { id: 11, name: "Japan" },
  { id: 12, name: "Ethiopia" },
  { id: 13, name: "Philippines" },
  { id: 14, name: "Egypt" },
  { id: 15, name: "Vietnam" },
];

function HeadlessDropdown() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  console.log(selectedCountry);

  return (
    <Listbox
      value={selectedCountry}
      onChange={setSelectedCountry}
      as="div"
      className="relative inline-flex w-60"
    >
      <Listbox.Button className="inline-flex w-full items-center justify-between h-10 gap-2 px-2 text-sm font-medium tracking-wide text-slate-500 transition duration-300 rounded focus:outline-none focus-visible:outline-none whitespace-nowrap border border-slate-300 hover:border-slate-400 disabled:cursor-not-allowed disabled:border-slate-300  disabled:shadow-none">
        {selectedCountry.name}
        <BiChevronDown className="w-6 h-6" />
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Listbox.Options className="absolute z-20 flex flex-col py-1 text-sm list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10">
          {countries.map((country) => (
            <Listbox.Option key={country.id} value={country} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`flex items-start justify-start gap-2 p-2 px-3 transition-colors duration-300 text-slate-500 hover:bg-primary-50 hover:text-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:outline-none focus-visible:outline-none" 
                  ${active && "bg-primary-500 text-white"} 
                  ${selected && "bg-primary-500 text-white"}`}
                >
                  {country.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export { HeadlessDropdown };
