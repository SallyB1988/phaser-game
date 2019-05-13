import React, { Component } from "react";
import LoadScene from "../components/scenes/loading.js"
import Phaser, { Renderer } from "phaser";

class PlayGame extends Component {

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [
        LoadScene
      ]

    };

    this.game = new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  preload() {

  }

  create() {

  }

  update() {}

  render() {
    return (null)
  }

}
export default PlayGame;