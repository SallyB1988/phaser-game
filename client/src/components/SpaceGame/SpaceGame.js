import { Component } from "react";
import LoadScene from "../scenes/LoadScene"
import Game from "../scenes/Game";
import Menu from "../scenes/Menu";
import Phaser from "phaser";
import { World } from "phaser/src/physics/matter-js/CustomMain";

class SpaceGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "display-region",
      physics: {
        default: 'matter',
        matter:{
          debug: true          
        }
        // default:'arcade',
        // arcade: {
        //   debug: true,
        //   gravity: { y: 200 }
        // }
      },
      scene: [
        LoadScene,Game,Menu
      ]

    };

    this.game = new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
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