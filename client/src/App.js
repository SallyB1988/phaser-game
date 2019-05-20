import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import { Navigation, MainDisplayRegion } from "./components";

const appRoutes = [
  { name: "home", path: "/" },
  { name: "login", path: "/login" },
  { name: "space game", path: "/spacegame" },
  { name: "scoreboard", path: "/scores" }
];

class App extends Component {

  render() {
    return (
      <Container fluid className="w-75">
        <Navigation routes={appRoutes} />
        <Image src="/images/brainVacation.png" className="d-block mx-auto my-2" style={{height: 250}} />
        <MainDisplayRegion />
      </Container>
    );
  }
}

export default App;
