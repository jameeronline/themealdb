import PropTypes from "prop-types";

const Button = ({
  size,
  type,
  variant,
  disabled,
  rounded,
  children,
  onClick,
}) => {
  const getButtonSize = () => {
    switch (size) {
      case "small":
        return "px-4 py-2 text-sm";
      case "medium":
        return "px-6 py-3 text-base";
      case "large":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getButtonType = () => {
    switch (type) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      case "ghost":
        return "bg-transparent text-gray-700";
      case "link":
        return "bg-transparent text-blue-500 underline";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "solid":
        return "border-none";
      case "outline":
        return "border bg-transparent";
      default:
        return "";
    }
  };

  const getRoundedStyle = () => {
    switch (rounded) {
      case "square":
        return "rounded-none";
      case "rounded":
        return "rounded-md";
      case "circle":
        return "rounded-full";
      default:
        return "rounded-md";
    }
  };

  return (
    <button
      className={`transition duration-300 ease-in-out inline-flex gap-2 items-center ${getButtonSize()} ${getButtonType()} ${getButtonVariant()} ${getRoundedStyle()} ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["primary", "secondary", "danger", "ghost", "link"]),
  variant: PropTypes.oneOf(["solid", "outline", "link"]),
  disabled: PropTypes.bool,
  rounded: PropTypes.oneOf(["square", "rounded", "circle"]),
  onClick: PropTypes.func,
};

export default Button;
