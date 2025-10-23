import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { type, classNames, onClick, children } = props;

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
