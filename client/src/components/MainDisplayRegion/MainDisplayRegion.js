import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Instructions,
  Scores,
  SpaceGame,
  Login,
  PanicModal
 } from "../../components";
 import { KEYS, enemies } from "../../utils/KEYS"
import { KEYS_Food, enemies_Food } from "../../utils/KEYS_Food"
import { LoadScene, FoodFightScene } from "../scenes/";

import API from "../../utils/API";
import NoMatch from "../../pages/NoMatch";
import "./MainDisplay.css";

class MainDisplayRegion extends Component {

  // themeData defaults to Ducks (which uses KEYS, enemies, and LoadScene)
  // FoodFight uses KEYS_Food, enemies_Food, and FoodFightScene)
    state = {
      scoreBoard: [],
      firstName: "Guest",
      lastName: "",
      playerId: "",
      panic: "Overlay_vsCode",
      score: 0,
      fired: 0,
      showModal: false,
      themeData: {
        KEYS: KEYS,
        enemies: enemies,
        themeScene: LoadScene
      }
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

  handleModalShow = () => {
    this.setState({ showModal: true });
  }

  handleModalHide = () => {
    this.setState({ showModal: false });
  }

  handleLogin = (data) => {
    this.setState({...data, playerId: data._id || data.playerId});
  }

  handlePanic = (data) => {
    this.setState({ panic: data });
  }

  setTheme = (data) => {
    let themeData  = {};
    if (data === "Ducks") {
      themeData = {
        KEYS: KEYS,
        enemies: enemies,
        themeScene: LoadScene
      }
    } else if (data === "Food") {
      themeData = {
        KEYS: KEYS_Food,
        enemies: enemies_Food,
        themeScene: FoodFightScene
      }
    }
    this.setState({ themeData: themeData });
  }

  getScoreBoard = () => this.state.scoreBoard;

  render() {
    return (
      <div id="display-region" focus="true" >   
        <Switch>
          <Route exact path="/" component={Instructions} />
          <Route exact path="/login" render={() => 
            <Login
              playerLogin={this.handleLogin}
              handlePanic={this.handlePanic}
              setTheme={this.setTheme}
            /> }/>
          <Route
            exact
            path="/spacegame"
            render={() => (
              <SpaceGame
                updateGameScore={this.handleScores}
                updateFired={this.handleBulletsFired}
                handleModalShow={this.handleModalShow}
                themeData={this.state.themeData}
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
              getScoreBoard={this.getScoreBoard} 
           />} />
          <Route component={NoMatch} />
        </Switch>

        <PanicModal
          modalOpen={this.state.showModal}
          hideModal={this.handleModalHide}
          overlay={this.state.panic}
        />
      </div>
    );
  }
}

export default MainDisplayRegion;
