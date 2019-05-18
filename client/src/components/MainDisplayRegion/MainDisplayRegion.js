import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Instructions,
  Scores,
  SpaceGame,
  Login
 } from "../../components";
 import API from "../../utils/API";

import NoMatch from "../../pages/NoMatch";


class MainDisplayRegion extends Component {
  state = {
    scoreBoard: [],
    firstName: "Guest",
    lastName: "",
    playerId: "",
    score: 0,
    fired: 0
  };

  componentDidMount() {
    this.getScoreBoard();
  }

  getScoreBoard = () => {
    API.getScores()
    .then(res => {
      this.setState({ scoreBoard: res.data });
    })
    .catch(err => console.log(err));
  }

  handleScores = score => {
    this.setState({ score: score });
  };

  handleBulletsFired = fired => {
    this.setState({ fired: fired });
  };

  handleLogin = (data) => {
    console.log("updating data in App");
    console.log(data);
    this.setState({...data, playerId: data._id});
    console.log('done');
  }

  // getPlayerInfo = () => {
  //   return ({
  //   firstName: this.state.firstName,
  //   lastName: this.state.lastName,
  //   playerId: this.state.playerId,
  //   score: this.state.score,
  //   fired: this.state.fired
  // })
  // }

  getScoreBoard = () => this.state.scoreBoard;

  render() {
    return (
      <div id="display-region" focus="true" >   
        <Switch>
          <Route exact path="/" component={Instructions} />
          <Route exact path="/login" render={() => <Login playerLogin={this.handleLogin} /> }/>
          <Route
            exact
            path="/spacegame"
            render={() => (
              <SpaceGame
                updateGameScore={this.handleScores}
                updateFired={this.handleBulletsFired}
              />
            )}
          />
          <Route exact path="/scores"
           render={() =>
             <Scores 
              playerId = {this.state.playerId}
              playerScore = {this.state.score}
              playerFname = {this.state.firstName}
              playerLname = {this.state.lastName}
              // getPlayerInfo={this.getPlayerInfo}
              getScoreBoard={this.getScoreBoard} 
           />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default MainDisplayRegion;
