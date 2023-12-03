import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

const IconsObj = {
  Facebook: <BiLogoFacebook />,
  X: <BiLogoTwitter />,
  Instagram: <BiLogoInstagram />,
  Linkedin: <BiLogoLinkedin />,
  Youtube: <BiLogoYoutube />,
};

//Components
import NewsletterForm from "./NewsletterForm";

//Labels
import LABELS from "src/utils/labelBundle";

export default function MainFooter() {
  const { FOOTER } = LABELS;

  //Display Social Links
  const socialMediaLinks = FOOTER.MAIN_FOOTER.SOCIAL.LINKS.map(
    (item, index) => (
      <li className="mb-2 leading-6" key={index}>
        <Link
          to={item.URL}
          className="inline-flex gap-4 items-center transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
        >
          {IconsObj[item.ICON]}
          {item.LABEL}
        </Link>
      </li>
    )
  );

  return (
    <div className="pt-16 pb-12 text-sm border-t border-slate-900 bg-slate-800">
      <div className="w-full 2xl:container px-6 mx-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div
            className="col-span-4 md:col-span-8 lg:col-span-6"
            aria-labelledby="footer-header"
          >
            <a
              id="WindUI-5-logo"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 mb-6 text-xl font-bold leading-6 whitespace-nowrap focus:outline-none text-white"
              href="#"
            >
              The Meal DB
            </a>
            <NewsletterForm />
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-6 flex justify-between flex-col md:flex-row gap-6">
            <nav aria-labelledby="footer-product-dark">
              <h3 className="mb-6 text-base font-medium text-white">Product</h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Customers
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Why us?
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-about-dark">
              <h3 className="mb-6 text-base font-medium text-white">
                About us
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Leadership
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-get-in-touch-dark">
              <h3 className="mb-6 text-base font-medium text-white">
                Get in touch
              </h3>
              <ul>{socialMediaLinks}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
