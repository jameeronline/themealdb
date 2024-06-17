import { useParams } from "react-router-dom";
import useSWR from "swr";

//components
import Container from "components/shared/Container";
import Spinner from "src/components/common/Spinner";
import Alert from "src/components/Alert";
import Empty from "src/components/common/Empty";
import Thumbnail from "src/components/Thumbnail";

//Page Components
import PageHeader from "src/components/PageHeader";
import MealList from "src/components/MealList";

//fetcher function
import { fetcher, capitalizeString } from "src/utils/helperFunctions";

export default function Ingredients() {
  const { id } = useParams();
  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}/filter.php?i=${id}`;
  console.log(id);

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !id) {
    return <Alert />;
  }

  const isEmpty = !Array.isArray(data.meals) || data.meals.length < 1;

  return (
    <>
      {isEmpty && <Empty />}
      {!isEmpty && (
        <>
          <PageHeader
            title={capitalizeString(id)}
            subtitle="ingredient"
            summary={`${data?.meals.length} meals found`}
          />

          <Container>
            <MealList meals={data.meals} />
          </Container>
        </>
      )}
    </>
  );
}
