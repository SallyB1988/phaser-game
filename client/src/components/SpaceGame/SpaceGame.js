import React from "react";
import { withRouter } from "react-router-dom";

import { Game, LoadScene, Menu, Pause, Hud } from "../scenes/";
import Phaser from "phaser";
class SpaceGame extends React.Component {
  constructor(props) {
    super(props);

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
        LoadScene,
        new Game([this.props.updateGameScore, this.props.updateFired, this.endGame]),
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
  
  endGame = () => {
    document.getElementById("display-region").innerHTML="";
    this.props.history.push('./scores');
    this.game.destroy(true);
  };

  render() {
    return null;
  }
}

export default withRouter(SpaceGame);
