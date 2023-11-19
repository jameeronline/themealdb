import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="grid grid-rows-[min-content_minmax(200px,_1fr)_min-content] min-h-screen">
        <Header className="auto-rows-max" />
        <main className="w-full 2xl:container mx-auto auto-rows-auto py-10 px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
