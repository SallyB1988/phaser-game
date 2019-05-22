import React from "react";
import { Row, Col } from "react-bootstrap";

// PlayerCard renders an image
function Instructions() {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <h3>Welcome to Brain Vacation</h3>
      </Row>
      <p>
        Have you been working hard and need a break to clear your mind? You've
        come to the right place! Take a few minutes and play an old-fashioned
        arcade style game.
      </p>
      <Row className="d-flex justify-content-center">
        <h2>Instructions</h2>
        <p>
          Go to the login page and enter your name. You may also choose a theme
          and a panic screen to display in case the boss walks in! Your high
          score will be recorded so you can come back later and try to beat it.
        </p>
        <p>
          You can just click the play game tab and play as a guest, but your
          score will not be recorded or ranked.
        </p>
        <h2>Controls</h2>
        <ul>
          <li>Left/Right Keys: Rotates the spaceship</li>
          <li>Up/Down Keys: Moves ship forward/backward</li>
          <li>Space Bar: Shoots missiles</li>
          <li>Enter: Pauses game</li>
          <li>M: Toggles sounds</li>
          <li />
          P: Displays Panic screen image. Hit escape to return to game.
        </ul>
      </Row>
    </>
  );
}

export default Instructions;
