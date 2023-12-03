export default function ListItemsTitle({ title }) {
  return (
    <h3 className="px-6 py-4 text-lg text-slate-700 font-bold bg-gray-50">
      {title}
    </h3>
  );
}

//default props
ListItemsTitle.defaultProps = {
  title: "Default title",
};
