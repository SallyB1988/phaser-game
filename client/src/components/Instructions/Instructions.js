import React from "react";
import { Row, Col } from "react-bootstrap";
import './Instructions.css';

// PlayerCard renders an image
function Instructions() {
  return (
    <Row className="justify-content-center">
      {/* <Col> */}
        <p id="intro" className="mx-5">
          Need a break to clear your mind? You've
          come to the right place! Take a few minutes and play an old-fashioned
          arcade style game.
        </p>

        <h3 className="text-center">INSTRUCTIONS</h3>
        <p id="instruction-text" className="mx-5">
          Enter your name on the Login page, select a theme
          and a panic screen type.  Your high
          score will be recorded so you can come back later and try to beat it.
          Or play as a guest, but your score will not be recorded or ranked.
        </p>


        <Row>
        <Col md={12}>
          
          <h3 className="text-center py-2">CONTROLS</h3>
          </Col>
        <Col md={5} className="font-weight-bold text-right">
            Left/Right Arrows:
          </Col>
          <Col md={7} className="text-left">
            Rotate the spaceship
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Up/Down Arrows:
          </Col>
          <Col md={7} className="text-left">
            Move ship forward/backward
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Space Bar:
          </Col>
          <Col md={7} className="text-left">
            Shoot missiles
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            Enter:
          </Col>
          <Col md={7} className="text-left">
            Pause game (hit Enter to resume)
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            M:
          </Col>
          <Col md={7} className="text-left">
            Toggle sounds
          </Col>
          <Col md={5} className="font-weight-bold text-right">
            P:
          </Col>
          <Col md={7} className="text-left">
          Display Panic screen image. Hit escape to return to game.
          </Col>
        </Row>
      {/* </Col> */}
    </Row>
  );
}

export default Instructions;
