import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  React.useEffect(
    (document.onkeydown = (event) => {
      event = event || window.event;

      if (event.keyCode === 40) {
        setY(y + 5);
        setBallPosition({
          left: ballPosition.left,
          top: y + "px"
        });
      } else if (event.keyCode === 38) {
        setY(y - 5);
        setBallPosition({
          left: ballPosition.left,
          top: y + "px"
        });
      } else if (event.keyCode === 37) {
        setX(x - 5);
        setBallPosition({
          left: x + "px",
          top: ballPosition.top
        });
      } else if (event.keyCode === 39) {
        setX(x + 5);
        setBallPosition({
          left: x + "px",
          top: ballPosition.top
        });
      }
    })
  );
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
