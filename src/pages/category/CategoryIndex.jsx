import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//context
import { useDataContext } from "src/context/DataContext";

export default function CategoryIndex() {
  const { categories } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories && categories.length > 0) {
      navigate(`/category/${categories[0]["strCategory"]}`);
    }
  }, [categories, navigate]);

  return <div>Category Index</div>;
}
