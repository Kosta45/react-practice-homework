import React from "react";

import Header from "./layout/Header/Header";
import ListCards from "./components/ListCards/ListCards";

import Basket from "./components/Basket/Basket";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <ListCards></ListCards>
    </div>
  );
}

export default App;
