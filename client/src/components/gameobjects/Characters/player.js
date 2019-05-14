import Phaser,{Physics} from "phaser";
import Game from "../../scenes/game.js";

export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(world, x, y, texture) {
        super(world, x, y, texture);
        world.scene.sys.add.displayList.add(this);

        this.turnSpeed =.11;
        this.speed = .08;
        this.hp = 10;
        // this.flip = false
        this.setIgnoreGravity(true)
        this.immovable=true; // things bounce off 
      }
}