import { BiSolidInbox } from "react-icons/bi";

export default function Empty() {
  return (
    <section className="h-full px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
      <div className="w-full lg:w-1/2 text-center mx-auto">
        <div className="text-6xl font-bold text-red-400 dark:text-blue-400 inline-flex justify-center">
          <BiSolidInbox />
        </div>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          No Items Found.
        </h1>
      </div>
    </section>
  );
}
