import React from "react";
import PropTypes from "prop-types";
import "./ModalWrapper.scss";

function ModalWrapper({ onClose, children }) {
  function handleClose(e) {
    const modalWrapper = e.target.classList.contains("modal-wrapper");

    if (modalWrapper) {
      onClose();
    }
  }

  return (
    <div className="modal-wrapper" onClick={handleClose}>
      {children}
    </div>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalWrapper;
