const semanticLabels = [
  {
    type: "danger",
    class: "pink",
  },
  {
    type: "info",
    class: "sky",
  },
  {
    type: "success",
    class: "green",
  },
  {
    type: "warning",
    class: "orange",
  },
];

function Alerts({ children, type = "danger" }) {
  const typeClass = semanticLabels.filter((item) => item.type === type);
  const itemType = typeClass[0]?.class;

  return (
    <div
      className={`flex w-full items-center gap-4 rounded border border-${itemType}-100 bg-${itemType}-50 px-4 py-3 text-sm text-${itemType}-500`}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alerts;
