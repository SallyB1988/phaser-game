import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Image, Container } from "react-bootstrap";
import { Instructions,
  Navigation,
  Scores,
  SpaceGame,
  Login
 } from "./components";

import NoMatch from "./pages/NoMatch";

const appRoutes = [
  { name: "home", path: "/" },
  { name: "login", path: "/login" },
  { name: "space game", path: "/spacegame" },
  { name: "scoreboard", path: "/scores" }
];

class App extends Component {
  state = {
    score: 0,
    fired: 0
  };

  handleScores = score => {
    this.setState({ score: score });
  };

  handleBulletsFired = fired => {
    this.setState({ fired: fired });
  };

  getCurrentScore = () => this.state.score;

  render() {
    // const { history } = this.props;
    return (
      <Router>
        <Container fluid className="w-75">
          <Navigation routes={appRoutes} />
          <Image src="/images/game_central_logo.png" className="d-block mx-auto my-2" style={{height: 250}} />
{/* 
          <h3>Score: {this.state.score}</h3>
          <h3>Bullets Fired: {this.state.fired}</h3> */}
          <div id="display-region" focus="true" >   
          <Switch>
          <Route exact path="/" component={Instructions} />
          <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/spacegame"
              render={() => (
                <SpaceGame
                  updateScore={this.handleScores}
                  updateFired={this.handleBulletsFired}
                />
              )}
            />
            <Route exact path="/scores" render={() => <Scores getCurrentScore={this.getCurrentScore} />} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
