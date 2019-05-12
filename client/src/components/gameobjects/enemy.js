import Phaser from "phaser";

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);

        this.setScale(.08);
        this.setCollideWorldBounds(true);
        this.setBounce(1)
        this.setVelocity(100, 200);
        
        this.body.setAllowGravity(true)
        this.body.setGravityY(0)

    }


}