import Phaser from "phaser";

export default class Enemy extends Phaser.Physics.Matter.Sprite {
    constructor(world, x, y, texture) {
        super(world, x, y, texture);
        world.scene.sys.add.displayList.add(this);
        this.setIgnoreGravity(true);
        this.setFriction(0, 0);
        this.setAngle(Phaser.Math.Between(-180, 180));
        this.thrustLeft(0.2);
        this.setScale(.6);
        this.setBounce(1);
        this.hp = 10;
        this.points = 5;
        this.setCollisionCategory(4);
        this.name="enemy";
      }
      
}