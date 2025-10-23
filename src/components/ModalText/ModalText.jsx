import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import ModalWrapper from "../Modal/ModalWrapper/ModalWrapper";
import ModalClose from "../Modal/ModalClose/ModalClose";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";

function ModalText({ onClose }) {
  function handleFirstClick() {
    console.log("Added to favorite");
  }

  return (
    <ModalWrapper onClose={onClose}>
      <Modal>
        <ModalHeader>
          <ModalClose onClick={onClose} />
        </ModalHeader>

        <ModalBody>
          <h2>Add Product “NAME”</h2>
          <p>Description for you product</p>
        </ModalBody>

        <ModalFooter
          firstClick={handleFirstClick}
          firstText="ADD TO FAVORITE"
        ></ModalFooter>
      </Modal>
    </ModalWrapper>
  );
}

ModalText.propTypes = {
  onClose: PropTypes.func,
};

export default ModalText;
