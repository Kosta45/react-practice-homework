import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

import "./Card.scss";

function Card(props) {
  const {
    id,
    name,
    price,
    image,
    article,
    color,
    handleModal,
    addDesiredCard,
    isDesired,
    ...restProps
  } = props;

  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <article className="product-card" id={id}>
      <figure className="product-card-image">
        <img src={image} alt={name} width="282" height="370" />
        <figcaption>{name}</figcaption>
      </figure>

      <div className="product-card-info">
        <div className="product-card-desc">
          <h2 className="product-card-name">{name}</h2>
          <p className="product-card-color">Color: {color}</p>
          <p className="product-card-article">Article: {article}</p>
        </div>

        <div className="product-card-buttons">
          <Button className="product-button-desired" onClick={addDesiredCard}>
            <img
              src={
                isDesired
                  ? "/icons/desired-yellow.svg"
                  : "/icons/desired-star.svg"
              }
              alt=""
              width="40"
              height="25"
              className="product-card-disired "
            />
          </Button>
          <Button
            classNames="product-card-basket"
            onMouseEnter={() => setIsButtonHover(true)}
            onMouseLeave={() => setIsButtonHover(false)}
            onClick={handleModal}
          >
            <span
              className="product-card-price"
              style={{
                opacity: isButtonHover ? 0 : 1,
              }}
            >
              {price}$
            </span>
            <img
              className="product-card-icon"
              src="/icons/basket-icon.svg"
              alt="Корзина"
              style={{
                width: "30px",
                height: "30px",
                opacity: isButtonHover ? 1 : 0,
              }}
            />
          </Button>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
