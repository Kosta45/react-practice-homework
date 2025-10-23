import React from "react";
import PropTypes from "prop-types";
import "./ModalHeader.scss";

function ModalHeader({ children }) {
  return <header className="modal-header">{children}</header>;
}

ModalHeader.propTypes = {
  children: PropTypes.node,
};

export default ModalHeader;
