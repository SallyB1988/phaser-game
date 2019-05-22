import React from "react";
import { withRouter } from "react-router-dom";

import { Game, Menu, Pause, Hud } from "../scenes/";
import Phaser from "phaser";

class SpaceGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closeFromGame: false,
      themeData: this.props.themeData,
    }

    this.config = {
      type: Phaser.AUTO,
      physics: {
        default: "matter",
        matter: {
          debug: true
        }
      },
      scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "display-region",
        width: 800,
        height: 600
      },
      scene: [
        // LoadScene,
        // FoodFightScene,
        this.props.themeData.themeScene,
        new Game([this.props.updateGameScore,
           this.props.updateFired,
            this.endGame,
             this.closeFromGame,
              this.props.handleModalShow,
              this.state.themeData
            ]),
        Menu,
        Pause,
        Hud
      ]
    };

  }
  
  componentDidMount() {
    this.game = new Phaser.Game(this.config);
  }

  componentWillUnmount() {
    this.endGame()
  }

  // If game is closed because game ended, set closeFromGame = true
  // If game ends because user navigated to different page, leave
  //    closeFromGame as false.  (Prevents scoreboard from showing
  //    when person navigates to login or home page while playing the
  //    space game.)
  closeFromGame = () => {
    this.setState({ closeFromGame: true })
  }
  
  endGame = () => {
    document.getElementById("display-region").innerHTML="";
    this.game.destroy(true);
    if (this.state.closeFromGame) this.props.history.push('./scores');
  };

  render() {
    return null;
  }
}

export default withRouter(SpaceGame);
