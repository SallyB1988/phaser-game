
import Phaser from "phaser";
export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" })
    }
    init(){
        this.scene.remove("Menu")
    }

    preload() {
        
    }

    create() {
        
        this.add.image(0, 0, 'stars').setOrigin(0, 0);

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        this.Duck = this.physics.add.sprite(400, 0, "Duck")
        this.Duck.setScale(.1, .1)
        this.Duck.body.setAllowGravity(false)
        this.Duck.setBounce(1, 1);
        this.Duck.setCollideWorldBounds(true);


        this.Bad = this.physics.add.sprite(100, 0, "Bad")
        this.Bad.setScale(.1, .1)
        this.Bad.body.setGravityY(0)
        this.Bad.setBounce(1, 1);

        this.Bad.setVelocity(100, 200);
        this.Bad.setCollideWorldBounds(true);
        this.physics.add.collider(this.Bad, this.Duck)

        emitter.startFollow(this.Duck);
    }

    update() {
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.Duck.setVelocityX(-300);
        }
        if (cursors.right.isDown) {
            this.Duck.setVelocityX(300);

        }
        if (cursors.down.isDown) {
            this.Duck.setVelocityY(300);
        }
        if (cursors.up.isDown) {
            this.Duck.setVelocityY(-300);
        }
        if (cursors.left.isUp && cursors.right.isUp) {
            this.Duck.setVelocityX(0);
        }
        if (cursors.up.isUp && cursors.down.isUp) {
            this.Duck.setVelocityY(0)
        }
    }
}