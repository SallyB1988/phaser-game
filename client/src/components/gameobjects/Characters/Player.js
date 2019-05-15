import Phaser from "phaser";

export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(world, x, y, texture) {
        super(world, x, y, texture);
        world.scene.sys.add.displayList.add(this);

        this.name = "player"
        this.setScale(.8);
        this.setCollisionCategory(2);
        this.turnSpeed =.1;
        this.speed = .01;
        this.hp = 10;
        // this.flip = false
        this.setIgnoreGravity(true)
      }
}