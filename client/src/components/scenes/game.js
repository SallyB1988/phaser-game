import Phaser from "phaser";
import KEYS from "../../utils/KEYS"
import { Player, Enemy } from "../gameobjects/Characters/index.js"
import KeyboardV2 from "../gameobjects/KeyboardV2.js"
import KeyControls from "../gameobjects/KeyboardControls"

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" })
    }
    init() {
    }

    preload() {
          this.anims.create({
            key: "shoot",
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers("bullet", {
                frames: [0, 1, 2, 3, 4]
            })
        })

    }

    create() {
        this.mWorld = this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, true, true);
        this.add.image(0, 0, KEYS.IMAGES.Stars).setOrigin(0, 0).setScale(.8);
        this.Ship = new Player(this.mWorld, 400, 200, KEYS.SPRITES.GreenShip)
        this.Bad = new Enemy(this.mWorld, 0, 0, KEYS.SPRITES.Enemy);
        new KeyboardV2(this, this.Ship);
        this.shootThing = this.matter.add.sprite(200, 200, "bullet").setSize(50,50)
    
        console.log(this.shootThing);
        this.shootThing.play("shoot")
    }

    update() {
        new KeyControls(this.Ship)
    }
}
