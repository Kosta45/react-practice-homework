import React from "react";
import PropTypes from "prop-types";

function Basket({ count }) {
  return (
    <button className="basket">
      <img
        className="basket-icon"
        height="30"
        width="30"
        src="/icons/basket.svg"
        alt="basket"
      />
      <span>{count}</span>
    </button>
  );
}

Basket.propTypes = {
  count: PropTypes.number,
};

export default Basket;
