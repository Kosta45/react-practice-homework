import React from "react";
import PropTypes from "prop-types";

import Modal from "../../Modal/Modal";
import ModalClose from "../../Modal/ModalClose/ModalClose";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import ModalBody from "../../Modal/ModalBody/ModalBody";
import ModalWrapper from "../../Modal/ModalWrapper/ModalWrapper";
import ModalFooter from "../../Modal/ModalFooter/ModalFooter";

import "./ModalCard.scss";

function ModalCard(props) {
  const { onClose, handleFirstClick, handleSecondClick, productName } = props;

  return (
    <ModalWrapper onClose={onClose}>
      <Modal>
        <ModalHeader>
          <ModalClose onClick={onClose} />
        </ModalHeader>

        <ModalBody>
          <h2>
            Do you want to add{" "}
            <span className="product-name">{productName}</span> to basket?
          </h2>
        </ModalBody>

        <ModalFooter
          firstClick={handleFirstClick}
          firstText="Yes, Add to basket."
          secondaryClick={handleSecondClick}
          secondaryText="No, cancel"
        ></ModalFooter>
      </Modal>
    </ModalWrapper>
  );
}

ModalCard.propTypes = {
  onClose: PropTypes.func,
  handleFirstClick: PropTypes.func,
  handleSecondClick: PropTypes.func,
  productName: PropTypes.string,
};

export default ModalCard;
