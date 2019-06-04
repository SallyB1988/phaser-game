import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import { Navigation, MainDisplayRegion } from "./components";
import { MMButton } from './components';
import "./App.css";

const appRoutes = [
  { name: "home", path: "/" },
  { name: "login", path: "/login" },
  { name: "play game", path: "/playgame" },
  { name: "scoreboard", path: "/scores" }
];

class App extends Component {

  render() {
    return (
      <Container id="main-container" fluid >
        <Navigation routes={appRoutes} />
        <Image src="/images/brainVacation.png" className="d-block mx-auto my-0" style={{width: "80%"}} />
        <MMButton />
        <MainDisplayRegion />
      </Container>
    );
  }
}

export default App;
