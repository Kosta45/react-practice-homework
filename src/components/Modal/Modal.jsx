import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ children }) {
  return <div className="modal">{children}</div>;
}

Modal.propTypes = {
  children: PropTypes.node,
};
export default Modal;
