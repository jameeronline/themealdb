import { BiArrowBack } from "react-icons/bi";
import { useNavigate, Link, useRouteError } from "react-router-dom";
//import 404 from "../../../../public/illustration.svg"

//labels
import LABELS from "src/utils/labelBundle";

export default function Missing() {
  //let navigate = useNavigate();
  //const error = useRouteError();
  const labels = LABELS.PAGES.MISSING;

  return (
    <section className="h-full px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
      <div className="wf-ull lg:w-1/2 text-center mx-auto">
        <p className="text-6xl font-bold text-red-400 dark:text-blue-400">
          {"<"}
          {labels.TITLE}
          {"/>"}
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          {labels.SUB_TITLE}
        </h1>
        <p className="mt-12 text-gray-500 dark:text-gray-400">
          {labels.DESCRIPTION}
        </p>
        {/* <p>{error.statusText || error.message}</p> */}

        <div className="flex items-center justify-center mt-4 gap-x-6">
          {/* <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-1/2 px-6 py-2 text-gray-700 transition-colors duration-200 bg-white border rounded gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
          >
            <BiArrowBack className="w-5 h-5 rtl:rotate-180" />
            <span>{labels.BUTTON_LABEL_1}</span>
          </button> */}

          <Link
            to="/"
            className="w-1/2 px-6 py-2 text-white transition-colors duration-300 bg-primary-500 rounded shrink-0 sm:w-auto hover:bg-primary-600 dark:hover:bg-primary-500 dark:bg-primary-600"
          >
            <span>{labels.BUTTON_LABEL_2}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
