import { Link } from "react-router-dom";

import Button from "src/components/Button";

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

      <p className="text-sm md:text-base leading-relaxed text-typo-500 mb-12">
        Welcome to TheMealDb – your ultimate destination for culinary
        inspiration! Dive into a world of diverse dishes, discover detailed
        ingredient lists and preparation methods, and ignite your passion for
        cooking with our collection of mouth-watering recipes. Explore, learn,
        and get inspired to create something delicious today!
      </p>

      <div className="flex items-center justify-center gap-4 lg:flex-row">
        <Link to="/search">
          <Button size="lg">Explore</Button>
        </Link>
        <Link to="/login">
          <Button size="lg" type="light">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default HomeIntro;
