import { useCallback } from "react";
import PropTypes from "prop-types";

function Alerts({ children, type }) {
  const alertType = useCallback(() => {
    switch (type) {
      case "danger":
        return "border-pink-100 bg-pink-50 text-pink-500";
      case "info":
        return "border-sky-100 bg-sky-50 text-sky-500";
      case "success":
        return "border-green-100 bg-green-50 text-green-500";
      case "warning":
        return "border-orange-100 bg-orange-50 text-orange-500";
      default:
        return "border-pink-100 bg-pink-50 text-pink-500";
    }
  }, [type]);

  return (
    <div
      className={`flex w-full items-center gap-4 rounded border px-4 py-3 text-sm ${alertType()}`}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alerts;

Alerts.propTypes = {
  type: PropTypes.string,
};
