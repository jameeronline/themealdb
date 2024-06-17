import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function SEO({ title, description, name, type, img, url }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {/* End standard metadata tags */}

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      {/* End Open Graph / Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  type: "website",
  img: "",
  url: "",
  lang: "en",
};
