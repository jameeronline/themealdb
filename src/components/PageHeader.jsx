import PropTypes from "prop-types";

function PageHeader({
  title = "Page Title",
  summary = "Summary",
  subtitle = "Subtitle",
}) {
  return (
    <header className="bg-primary-50 py-8 md:py-20 mb-6 md:mb-12">
      <h1 className="flex flex-col gap-1 text-2xl md:text-6xl text-center font-display font-bold text-slate-900">
        <span className="uppercase font-mono text-xs md:text-sm text-primary-600">
          {subtitle}
        </span>
        <span>{title}</span>
        <em className="text-sm md:text-base font-mono font-normal not-italic">
          ({summary})
        </em>
      </h1>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  summary: PropTypes.string,
};

export default PageHeader;
