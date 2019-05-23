import React from "react";
import { Row, Col } from "react-bootstrap";

// PlayerCard renders an image
function Instructions() {
  return (
    <Row className="px-5 justify-content-center">
      <Col>
        <p className="my-2">
          Have you been working hard and need a break to clear your mind? You've
          come to the right place! Take a few minutes and play an old-fashioned
          arcade style game.
        </p>

        <h2 className="text-center py-2">Instructions</h2>
        <hr />
        <p>
          Go to the login page and enter your name. You may also choose a theme
          and a panic screen to display in case the boss walks in! Your high
          score will be recorded so you can come back later and try to beat it.
        </p>
        <p>
          You can just click the play game tab and play as a guest, but your
          score will not be recorded or ranked.
        </p>


        <Row className="py-2">
        <Col md={12}>
          
          <h2 className="text-center">Controls</h2>
          <hr/>
          </Col>
        <Col md={5} className="font-weight-bold text-right">
            Left/Right Arrows:
          </Col>
          <Col md={7} className="text-left">
            Rotates the spaceship
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Up/Down Arrows:
          </Col>
          <Col md={7} className="text-left">
            Moves ship forward/backward
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Space Bar:
          </Col>
          <Col md={7} className="text-left">
            Shoots missiles
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Enter:
          </Col>
          <Col md={7} className="text-left">
            Pauses game (hit Enter to resume)
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            M:
          </Col>
          <Col md={7} className="text-left">
            Toggles sounds
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            P:
          </Col>
          <Col md={7} className="text-left">
          Displays Panic screen image. Hit escape to return to game.
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Instructions;
