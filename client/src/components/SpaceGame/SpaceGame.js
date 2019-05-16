import React from "react";
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
        // mode: Phaser.Scale.CENTER_BOTH,
        // parent: "display-region",
        width: 800,
        height: 600
      },
      scene: [
        LoadScene,
        new Game([this.props.updateScore, this.props.updateFired]),
        Menu,
        Pause,
        Hud
      ]
    };
    this.game = new Phaser.Game(this.config);
  }

  render() {
    return null;
  }
}

export default SpaceGame;
