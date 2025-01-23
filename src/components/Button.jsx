import PropTypes from "prop-types";
import { cn } from "src/utils/helperFunctions";
import { tv } from "tailwind-variants";

export default function Button({
  children,
  className,
  type = "primary",
  size,
  ...props
}) {
  const typeClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 focus:bg-primary-700",
    secondary: "bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700",
    danger: "bg-error-500 hover:bg-error-600 focus:bg-error-700",
    success: "bg-success-500 hover:bg-success-600 focus:bg-success-700",
    info: "bg-info-500 hover:bg-info-600 focus:bg-info-700",
    warning: "bg-warning-500 hover:bg-warning-600 focus:bg-warning-700",
    light:
      "bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 text-neutral-700",
    dark: "bg-neutral-800 hover:bg-neutral-900 focus:bg-neutral-600",
  };

  const sizeClasses = {
    sm: "h-8 px-8 text-xs",
    md: "h-10 px-10 text-sm",
    lg: "h-14 px-12 text-base",
    xl: "h-16 px-16 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap focus-visible:outline-none disabled:cursor-not-allowed disabled:border-typo-300 disabled:bg-typo-300 disabled:shadow-none",
        typeClasses[type],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
    "warning",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
