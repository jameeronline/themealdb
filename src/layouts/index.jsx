import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

//Scroll to Top
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="grid grid-rows-[min-content_minmax(200px,_1fr)_min-content] min-h-screen">
        <Header className="auto-rows-max" />
        <main className="w-full mx-auto auto-rows-auto pb-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
