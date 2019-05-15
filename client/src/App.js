import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Image, Container} from 'react-bootstrap';
import Instructions from "./components/Instructions";
import Navigation from "./components/Navigation";
import Scores from "./components/Scores";
import SpaceGame from "./components/SpaceGame";
// import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";

const appRoutes = [
  { name: "home", path: "/" },
  // { name: "login", path: "/login" },
  { name: "space game", path: "/spacegame" },
  { name: "scoreboard", path: "/scores" },
]

class App extends Component {
  state = {
    score: 0,
    fired: 0
  }

  handleScores = (data) => {
    this.setState({ data })
  }

  render() {

    return (
      <Router>
        <Container fluid className="w-75">

          <Navigation routes={appRoutes} />
        <Image src="/images/game_central_logo.png" fluid />

        <h3>Score: {this.state.score}</h3>
        <h3>Bullets Fired: {this.state.fired}</h3>
        {/* <div id="display-region" focus="true" >    */}
                 <Switch>
            <Route exact path="/" component={Instructions} />
            <Route exact path="/spacegame" render={() => <SpaceGame updateScore={this.handleScores} />} />
            <Route exact path="/scores" component={Scores} />
            <Route component={NoMatch} />
          </Switch>
          {/* </div> */}
        </Container>
      </Router>
    );
  }
}

export default App;
