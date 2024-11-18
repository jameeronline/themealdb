import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//context
import { useDataContext } from "src/context/DataContext";

export default function AreaIndex() {
  const { areas } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (areas && areas.length > 0) {
      navigate(`/area/${areas[0]["strArea"]}`);
    }
  }, [areas, navigate]);

  return <div>Area Index</div>;
}
