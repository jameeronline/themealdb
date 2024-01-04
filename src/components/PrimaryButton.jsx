import classNames from "classnames";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export default function PrimaryButton({ children, type, ...props }) {
  //console.log(type);

  const btnVarients = [
    "danger",
    "warning",
    "info",
    "success",
    "primary",
    "secondary",
  ];

  const btnType = classNames(
    {
      red: type == "danger" ? true : false,
    },
    {
      yellow: type == "warning" ? true : false,
    },
    {
      blue: type == "info" ? true : false,
    },
    {
      green: type == "success" ? true : false,
    },
    {
      primary: type == "default" ? true : false,
    }
  );

  console.log(btnType);

  return (
    <>
      <button
        className={`inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-${btnType}-500 hover:bg-${btnType}-600 focus:bg-${btnType}-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-${btnType}-300 disabled:bg-${btnType}-300 disabled:shadow-none`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

PrimaryButton.defaultProps = {
  type: "default",
};
