import Phaser from "phaser";

export default class Enemy extends Phaser.Physics.Matter.Sprite {
    constructor(world, x, y, texture) {
        super(world, x, y, texture);
        world.scene.sys.add.displayList.add(this);
        this.setScale(.1)
        this.setBounce(1)
        this.hp = 10;
      }
}