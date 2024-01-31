import { Link } from "react-router-dom";
import { FOOTER_LBL } from "src/labels";

export default function SubFooter() {
  const LABEL = FOOTER_LBL.SUB_FOOTER;

  return (
    <div className="py-4 text-sm border-t border-slate-900 bg-slate-700">
      <div className="w-full xl:container px-6 mx-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <p className="text-center md:text-start">
              ©{new Date().getFullYear()} The Measl DB. {LABEL.DESC}
            </p>
          </div>
          <nav className="col-span-4 md:col-span-4 lg:col-span-6">
            <ul className="flex items-center justify-center md:justify-end flex-col md:flex-row gap-2 md:gap-8 text-center md:text-start">
              {LABEL.LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.URL}
                    className="inline-flex transition-colors duration-300 hover:underline hover:text-primary-500"
                  >
                    {item.LABEL}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
