import { redirect } from "react-router-dom";

export function loader() {
  return redirect("beef");
}

export default function CategoryIndex() {
  return <div>Category Index</div>;
}
