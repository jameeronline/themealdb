import PropTypes from "prop-types";

function PageHeader({ title, summary }) {
  return (
    <header className="bg-primary-50 py-16 mb-12">
      <h1 className="flex flex-col gap-1 text-6xl text-center font-display font-bold">
        <span className="">{title}</span>
        {summary && (
          <em className="text-base font-mono font-normal not-italic">
            ({summary})
          </em>
        )}
      </h1>
    </header>
  );
}

export default PageHeader;

PageHeader.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
};
