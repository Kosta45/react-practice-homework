import React from "react";
import PropTypes from "prop-types";
import Close from "../icons/close.svg?react";
import "./ModalClose.scss";

function ModalClose({ onClick }) {
  return (
    <button type="button" className="modal-close" onClick={onClick}>
      <Close />
    </button>
  );
}

ModalClose.propTypes = {
  onClick: PropTypes.func,
};

export default ModalClose;
