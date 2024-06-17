import { redirect } from "react-router-dom";

import config from "src/configuration/config";

export function loader() {
  return redirect(config.categoryIndex);
}

export default function CategoryIndex() {
  return <div>Category Index</div>;
}
