import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Home page components
import SEO from "src/components/common/SEO";
import Banner from "./HomeBanner";
import HomeCategoryList from "./HomeCategoryList";
import Newsletter from "./Newsletter";

//shared components
import { Container } from "src/components/shared";

//context
import { DataContext } from "src/context/DataContext";

const Home = () => {
  const { categoryDetails } = useContext(DataContext);
  return (
    <>
      <Container>
        <SEO
          title="The Meal DB | Explore the foods around the world"
          description=""
          name=""
          img=""
        />

        <header className="text-center max-w-3xl mx-auto my-20">
          <h1 className="text-5xl font-bold leading-snug text-slate-900 mb-6">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-primary-600 to-primary-200">
              Delicious Meals
            </span>{" "}
            That Satisfy Your Cravings
          </h1>

          <p className="text-base text-slate-400 mb-12">
            Welcome to TheMealDb, your ultimate source for meal information and
            details. Explore a wide variety of dishes, learn about their
            ingredients and preparation methods, and get inspired to try new
            recipes!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <Link
              to="/search"
              className="flex items-center py-4 text-md font-medium text-white px-12 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 transition duration-300 rounded"
            >
              Explore
            </Link>
            <Link
              to="/login"
              className="flex items-center py-4 text-md font-medium px-12 bg-primary-100 text-primary-400 hover:text-primary-500 transition duration-300 rounded"
            >
              Sign Up
            </Link>
          </div>
        </header>
        <Banner />
        <HomeCategoryList categoryDetails={categoryDetails} />
      </Container>
      <Newsletter />
    </>
  );
};

//Prop validation
// Home.propTypes = {
//   categoryDetails: PropTypes.array.isRequired,
// };

export default Home;
