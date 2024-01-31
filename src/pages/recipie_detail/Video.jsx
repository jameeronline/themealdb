import PropTypes from "prop-types";

export default function Video({ url }) {
  return (
    <>
      <div className="m-10">
        <h4 className="text-lg font-bold mb-4">Preview:</h4>
        <div className="mb-10">
          <iframe className="w-full aspect-video" src={url}></iframe>
        </div>
      </div>
    </>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};
