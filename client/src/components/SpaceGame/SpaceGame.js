import { Component } from "react";
import LoadScene from "../scenes/LoadScene"
import Game from "../scenes/Game";
import Menu from "../scenes/Menu";
import Pause from "../scenes/Pause";
import Phaser from "phaser";
import { World } from "phaser/src/physics/matter-js/CustomMain";

class SpaceGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      physics: {
        default: 'matter',
        matter:{
          debug: true          
        }
      },
      scale: {
        mode: Phaser.Scale.CENTER_BOTH,
        parent: "display-region",
        width: 800,
        height: 600
    },
      scene: [
        LoadScene,Game,Menu,Pause
      ]

    };

    this.game = new Phaser.Game(config);
  }

  componentWillUnmount() {
    let dummy = [50, 30];
    this.props.updateScores(dummy);
  }

  preload() {

  }

  create() {
    
  new World(Game)
  }

  update() {}

  render() {
    return (null)
  }

}
export default SpaceGame;