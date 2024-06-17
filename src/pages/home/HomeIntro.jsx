import { Link } from "react-router-dom";

function HomeIntro() {
  return (
    <header className="text-center max-w-3xl mx-auto my-16 md:my-32">
      <h1 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold  text-slate-900 mb-6">
        Explore a{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-primary-600 to-primary-200">
          World of Flavors
        </span>{" "}
        with Our Diverse Meal Collection
      </h1>

      <p className="text-sm md:text-base leading-relaxed text-slate-400 mb-12">
        Welcome to TheMealDb – your ultimate destination for culinary
        inspiration! Dive into a world of diverse dishes, discover detailed
        ingredient lists and preparation methods, and ignite your passion for
        cooking with our collection of mouth-watering recipes. Explore, learn,
        and get inspired to create something delicious today!
      </p>

      <div className="flex items-center justify-center gap-4 lg:flex-row">
        <Link
          to="/search"
          className="flex items-center py-4 text-md font-medium text-white px-12 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 transition duration-300 rounded"
        >
          Explore
        </Link>
        <Link
          to="/login"
          className="flex items-center py-4 text-md font-medium px-12 bg-typo-100 text-typo-600 hover:text-typo-500 transition duration-300 rounded"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default HomeIntro;
