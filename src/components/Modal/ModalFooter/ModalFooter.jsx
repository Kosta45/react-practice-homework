import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button/Button";
import "./ModalFooter.scss";

function ModalFooter(props) {
  const { firstText, secondaryText, firstClick, secondaryClick } = props;

  return (
    <footer className="modal-footer">
      {firstClick && (
        <Button
          type="button"
          classNames="modal-button-first"
          onClick={firstClick}
        >
          {firstText}
        </Button>
      )}

      {secondaryClick && (
        <Button
          type="button"
          classNames="modal-button-second"
          onClick={secondaryClick}
        >
          {secondaryText}
        </Button>
      )}
    </footer>
  );
}

ModalFooter.propTypes = {
  firstText: PropTypes.node,
  secondaryText: PropTypes.node,
  firstClick: PropTypes.func,
  secondaryClick: PropTypes.func,
};

export default ModalFooter;
