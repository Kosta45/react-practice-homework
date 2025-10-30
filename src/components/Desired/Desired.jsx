import React from "react";
import PropTypes from "prop-types";

function Desired({ count }) {
  return (
    <button className="desired">
      <img
        className="desired-icon"
        height="30"
        width="30"
        src={
          count === 0 ? "/icons/desired-star.svg" : "/icons/desired-yellow.svg"
        }
        alt="basket"
      />
      <span>{count}</span>
    </button>
  );
}

Desired.propTypes = {
  count: PropTypes.number,
};

export default Desired;
