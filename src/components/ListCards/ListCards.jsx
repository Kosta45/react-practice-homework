import React, { useState, useEffect } from "react";

import Header from "../../layout/Header/Header";

import Card from "../Card/Card";
import ModalCard from "../Card/ModalCard/ModalCard";
import Basket from "../Basket/Basket";
import Desired from "../Desired/Desired";

function ListCards() {
  const [productsData, setProductsData] = useState([]);
  const [desiredCards, setDesiredCards] = useState([]);
  const [addedCards, setAddedCards] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Лог для понимания
  useEffect(() => {
    console.log("Basket", addedCards);
    localStorage.setItem("basket", JSON.stringify(addedCards));
  }, [addedCards]);

  // Лог для понимания что я добавил в желаемое
  useEffect(() => {
    console.log("Desired", desiredCards);
    localStorage.setItem("desiredList", JSON.stringify(desiredCards));
  }, [desiredCards]);

  useEffect(() => {
    fetch("/products/product.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductsData(data);
      });
  }, []);

  function addInBasket(card) {
    setAddedCards([...addedCards, card]);
    setIsModalOpen(false);
    localStorage.setItem("basket", JSON.stringify(addedCards));
  }

  function addDesiredCard(card) {
    const desiredCardExist = desiredCards.some((item) => card.id === item.id);

    setProductsData(
      productsData.map((item) =>
        item.id === card.id ? { ...item, isDesired: !item.isDesired } : item
      )
    );

    if (desiredCardExist) {
      setDesiredCards(desiredCards.filter((item) => item.id !== card.id));
    } else {
      setDesiredCards([...desiredCards, card]);
    }
  }

  function handleModal(item) {
    setIsModalOpen(!isModalOpen);
    setSelectedCard(item);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {" "}
      <Header>
        <Desired count={desiredCards.length} />
        <Basket count={addedCards.length} />
      </Header>
      <div className="wrapper-cards">
        {productsData &&
          productsData.map((product) => {
            return (
              <Card
                isDesired={product.isDesired}
                addDesiredCard={() => addDesiredCard(product)}
                handleModal={() => handleModal(product)}
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                article={product.article}
                color={product.color}
              />
            );
          })}

        {isModalOpen && (
          <ModalCard
            productName={selectedCard.name}
            onClose={handleModal}
            handleFirstClick={() => addInBasket(selectedCard)}
            handleSecondClick={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default ListCards;
