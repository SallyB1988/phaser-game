import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import { Navigation, MainDisplayRegion } from "./components";
import "./App.css";

const appRoutes = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Arcade Game", path: "/playgame" },
  { name: "Scoreboard", path: "/scores" }
];

class App extends Component {

  render() {
    return (
      <Container id="main-container" fluid >
        <Navigation routes={appRoutes} />
        <Image src="/images/brainVacation.png" className="d-block mx-auto my-0" style={{width: "80%"}} />
        <MainDisplayRegion />
      </Container>
    );
  }
}

export default App;
