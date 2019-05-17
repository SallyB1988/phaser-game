import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Instructions,
  Scores,
  SpaceGame,
  Login
 } from "../../components";

import NoMatch from "../../pages/NoMatch";


class MainDisplayRegion extends Component {
  state = {
    playerFirstName: "Guest",
    playerLastName: "",
    score: 0,
    fired: 0
  };

  handleScores = score => {
    this.setState({ score: score });
  };

  handleBulletsFired = fired => {
    this.setState({ fired: fired });
  };

  render() {
    return (
      <div id="display-region" focus="true" >   
      <h3>Welcome {this.state.playerFirstName}</h3>
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
          <Route exact path="/scores" render={() => <Scores playerInfo={this.state} />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default MainDisplayRegion;
