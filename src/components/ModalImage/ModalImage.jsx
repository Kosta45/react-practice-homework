import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import ModalWrapper from "../Modal/ModalWrapper/ModalWrapper";
import ModalClose from "../Modal/ModalClose/ModalClose";
import ModalHeader from "../Modal/ModalHeader/ModalHeader";
import ModalBody from "../Modal/ModalBody/ModalBody";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";

function ModalImage({ onClose }) {
  function handleFirstClick() {
    console.log("Canceled");
  }
  function handleSecondClick() {
    console.log("Deleted");
  }

  return (
    <ModalWrapper onClose={onClose}>
      <Modal>
        <ModalHeader>
          <ModalClose onClick={onClose} />
        </ModalHeader>

        <ModalBody>
          <img src="/images/image.png" alt="" />
          <h2>Product Delete!</h2>
          <p>
            By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.
          </p>
        </ModalBody>

        <ModalFooter
          firstClick={handleFirstClick}
          firstText="NO, CANCEL"
          secondaryClick={handleSecondClick}
          secondaryText="YES, DELETE"
        ></ModalFooter>
      </Modal>
    </ModalWrapper>
  );
}

ModalImage.propTypes = {
  onClose: PropTypes.func,
};

export default ModalImage;
