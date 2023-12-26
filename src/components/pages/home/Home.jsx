import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Home page components
import SEO from "src/components/common/SEO";
import Banner from "./HomeBanner";
import HomeCategoryList from "./HomeCategoryList";

//public components
import { Container } from "components/public";

const Home = ({ categoryDetails }) => {
  return (
    <Container>
      <SEO
        title="The Meal DB | Explore the foods around the world"
        description=""
        name=""
        img=""
      />
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold leading-snug text-slate-900 mb-6">
          Discover <span className="text-primary-500">Delicious Meals</span>{" "}
          That Satisfy Your Cravings
        </h1>

        <p className="text-base text-slate-400 mb-12">
          Explore a wide range of mouthwatering dishes and find your next
          favorite recipe.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Link
            to="/"
            className="flex items-center py-4 text-md font-medium text-white px-8 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 transition duration-300 rounded"
          >
            Meal Details
          </Link>
          <Link
            to="search"
            className="flex items-center py-4 text-md font-medium px-8 border border-primary-500 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded"
          >
            Find Meals
          </Link>
        </div>
      </header>
      <Banner />
      <HomeCategoryList categoryDetails={categoryDetails} />
    </Container>
  );
};

//Prop validation
Home.propTypes = {
  categoryDetails: PropTypes.array.isRequired,
};

export default Home;
