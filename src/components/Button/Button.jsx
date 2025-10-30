import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

function Button(props) {
  const { type, classNames, onClick, children, ...restProps } = props;

  return (
    <button type={type} className={classNames} onClick={onClick} {...restProps}>
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
