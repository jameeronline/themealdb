import { redirect } from "react-router-dom";

import config from "src/configuration/config";

export function loader() {
  return redirect(config.areaIndex);
}

export default function AreaIndex() {
  return <div>Area Index</div>;
}
