import React, { useState } from "react";
import Button from "./components/Button/Button";

import "./App.css";
import ModalImage from "./components/ModalImage/ModalImage";
import ModalText from "./components/ModalText/ModalText";

function App() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondaryModal, setSecondaryModal] = useState(false);

  function handleFirstModal() {
    setFirstModal(!firstModal);
  }

  function handleSecondarytModal() {
    setSecondaryModal(!secondaryModal);
  }

  return (
    <div className="wrapper">
      <Button
        type="button"
        className="open-first-modal"
        onClick={handleFirstModal}
      >
        Open first modal
      </Button>
      <Button
        type="button"
        className="open-second-modal"
        onClick={handleSecondarytModal}
      >
        Open second modal
      </Button>

      {firstModal && <ModalImage onClose={handleFirstModal} />}
      {secondaryModal && <ModalText onClose={handleSecondarytModal} />}
    </div>
  );
}

export default App;
