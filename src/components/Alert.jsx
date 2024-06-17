import PropTypes from "prop-types";
import { cn } from "src/utils/helperFunctions";

// Icons
import {
  BiErrorCircle,
  BiCheckCircle,
  BiInfoCircle,
  BiError,
} from "react-icons/bi";

const icons = {
  danger: BiErrorCircle,
  success: BiCheckCircle,
  info: BiInfoCircle,
  warning: BiError,
};

const alertStyles = {
  danger: "border-error-200 bg-error-50 px-4 py-3 text-error-500",
  success: "border-success-200 bg-success-50 px-4 py-3 text-success-500",
  info: "border-info-200 bg-info-50 px-4 py-3 text-info-500",
  warning: "border-warning-200 bg-warning-50 px-4 py-3 text-warning-500",
};

export default function Alert({ message, type = "danger", ...props }) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded border text-sm",
        alertStyles[type]
      )}
      role="alert"
      {...props}
    >
      <Icon className="w-6 h-6" />
      <p className="flex-1">
        {message || "No results found. Please try different keywords."}
      </p>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["danger", "success", "info", "warning"]),
};

Alert.defaultProps = {
  type: "danger",
};
