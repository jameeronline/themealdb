import { useContext } from "react";

//Home page components
import SEO from "src/components/common/SEO";
import HomeBanner from "./HomeBanner";
import HomeCategoryList from "./HomeCategoryList";
import Newsletter from "./Newsletter";
import HomeSlider from "./HomeSlider";
import HomeIntro from "./HomeIntro";
import CusineList from "./CusineList.home";

//API Layer
import { getUsers } from "src/services/api";

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

        <HomeIntro />
        <HomeBanner />
        {/* <HomeSlider /> */}
        <HomeCategoryList categoryDetails={categoryDetails} />
        <CusineList />
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
