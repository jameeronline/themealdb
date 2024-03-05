import PropTypes from "prop-types";

function PageHeader({ title, summary, subtitle }) {
  return (
    <header className="bg-primary-50 py-10 md:py-20 mb-6 md:mb-12">
      <h1 className="flex flex-col gap-1 text-4xl md:text-6xl text-center font-display font-bold text-slate-900">
        <span className="uppercase font-mono text-sm text-primary-600">
          {subtitle && subtitle}
        </span>
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
  subtitle: PropTypes.string,
  summary: PropTypes.string,
};

PageHeader.defaultProps = {
  title: "",
  subtitle: "",
  summary: "",
};
