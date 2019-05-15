import React from "react";
import { Game, LoadScene, Menu, Pause, Hud } from "../scenes/";
import Phaser from "phaser";

class SpaceGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    }

    this.handleScore = (obj) => {
      return (
        this.setState({
        score:obj.score
        })
      )
    }

    this.config = {
      type: Phaser.AUTO,
      physics: {
        default: 'matter',
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
        LoadScene, new Game(this.handleScore), Menu, Pause, Hud
      ]
    };
    this.game = new Phaser.Game(this.config);


  }





  componentDidMount() {
    
  }

  render() {

    return (
      <h1>Look at this score {this.state.score}</h1>
    )
  }
}
export default SpaceGame;