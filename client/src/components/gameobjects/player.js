import Phaser from "phaser";
import Game from "../scenes/game.js";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);

        this.setScale(.1);
        this.setCollideWorldBounds(true);
        this.setBounce(1.1)

        this.body.setAllowGravity(false)

    }


}