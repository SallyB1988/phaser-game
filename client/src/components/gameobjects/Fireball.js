import Phaser from "phaser";

export default class Fireball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);

        this.setScale(.2);
        this.setCollideWorldBounds(true);
        this.setBounce(0)
        this.setVelocity(x+200, y+200);
        
        // this.body.setAllowGravity(true)
        // this.body.setGravityY(0)

    }



}