import React from "react";
import PropTypes from "prop-types";
import "./badge.css";

export const Badge = ({ type, label, ...props }) => {
  return <div className={`badge badge-${type}`}>{label}</div>;
};

Badge.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(["primary", "danger", "warning", "info", "success"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  type: "primary",
  label: "badge",
  onClick: undefined,
};
