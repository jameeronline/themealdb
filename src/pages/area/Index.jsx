import { redirect } from "react-router-dom";

export function loader() {
  return redirect("american");
}

export default function AreaIndex() {
  return <div>Area Index</div>;
}
