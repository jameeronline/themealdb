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
import { FOOTER_LBL } from "src/labels";

export default function MainFooter() {
  const LABELS = FOOTER_LBL;

  //Display Social Links
  const socialMediaLinks = LABELS.MAIN_FOOTER.SOCIAL.LINKS.map(
    (item, index) => (
      <li className="mb-2 leading-6" key={index}>
        <a
          href={item.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-4 items-center transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
        >
          {IconsObj[item.ICON]}
          {item.LABEL}
        </a>
      </li>
    )
  );

  // Helper function to generate HTML for links
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li className="mb-2 leading-6" key={index}>
        <Link
          to={link.URL}
          className="transition-colors duration-300 hover:text-primary-500 focus:text-primary-600"
        >
          {link.LABEL}
        </Link>
      </li>
    ));
  };

  // Main function to render HTML for each link group
  const renderLinkGroups = () => {
    return Object.entries(LABELS.MAIN_FOOTER.LINKGROUP).map(
      ([groupKey, group]) => (
        <nav aria-labelledby="footer-product-dark" key={groupKey}>
          <h3 className="mb-6 text-base font-medium text-white">
            {group.TITLE}
          </h3>
          <ul>{renderLinks(group.LINKS)}</ul>
        </nav>
      )
    );
  };

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
            {renderLinkGroups()}
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
