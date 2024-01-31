import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({ children, ...props }) {
  console.log(props.type);
  const btnType = classNames(
    {
      red: props.type == "danger" ? true : false,
    },
    {
      yellow: props.type == "warning" ? true : false,
    },
    {
      blue: props.type == "info" ? true : false,
    },
    {
      green: props.type == "success" ? true : false,
    },
    {
      primary: props.type == "default" ? true : false,
    }
  );

  return (
    <>
      <button
        {...props}
        className={`inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-${btnType}-500 hover:bg-${btnType}-600 focus:bg-${btnType}-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-${btnType}-300 disabled:bg-${btnType}-300 disabled:shadow-none`}
      >
        {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  type: "default",
  size: "default",
};

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  size: PropTypes.string,
};
