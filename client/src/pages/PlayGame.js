import { Component } from "react";
import LoadScene from "../components/scenes/LoadScene"
import Game from "../components/scenes/Game";
import Menu from "../components/scenes/Menu";
import Pause from "../components/scenes/Pause.js";
import Phaser from "phaser";
import { World } from "phaser/src/physics/matter-js/CustomMain";

class PlayGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
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
        LoadScene,
        Game,
        Pause,
        Menu,
        
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
export default PlayGame;