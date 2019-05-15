import Phaser from "phaser";
import KEYS from "../../utils/KEYS"
import { Player, Enemy } from "../gameobjects/Characters"
import KeyboardV2 from "../gameobjects/KeyboardV2"
import KeyControls from "../gameobjects/KeyboardControls"

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" })
    }
    init() {
      this.fired = 0;
    }

    preload() {
        this.anims.create({
            key: KEYS.ANIMATIONS.Missle,
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers(KEYS.SPRITES.Missle, {
                frames: [0, 1, 2, 3, 4]
            })
        })

    }

    create = () => {
        // this.sound.play()
        this.mWorld = this.matter.world.setBounds(0, 0, 1600, 1200, 32, true, true, true, true);
        this.mWorld.on("collisionstart", (pair, bod1, bod2) => {
          console.log(bod2);
            if (bod1.gameObject && bod1.gameObject && bod1.gameObject.name !== "player") {
                bod1.gameObject.destroy();
                bod2.gameObject.destroy();
            }

            // handle bullet interaction with wall
            if (bod1.gameObject===null || bod2.gameObject === null) {
              if (bod2.gameObject.name ==="bullet") {
                bod2.gameObject.destroy();
              } else if (bod2.gameObject.name==="bullet") {
                bod1.gameObject.destroy();
              } 
            } 
            
        })

        this.add.image(0, 0, KEYS.IMAGES.Stars).setScale(4);
        this.Ship = new Player(this.mWorld, 400, 200, KEYS.SPRITES.GreenShip)

        //Camera
        this.cameras.main.startFollow(this.Ship)
            .setZoom(.5);

        this.sound.pauseOnBlur = false;  
        this.sound.loopEndOffset = 2;
        this.intro = this.sound.add(KEYS.AUDIO.Intro)
        this.intro.on("complete", () => {
            this.sound.play(KEYS.AUDIO.Battle, {
                loop: true,
                volume: .5,
            })
        })

        this.intro.play({volume:.5});

        this.Bad = new Enemy(this.mWorld, 0, 0, KEYS.SPRITES.Enemy);

        new KeyboardV2(this, this.Ship);

        this.input.keyboard.on('keyup_SPACE', (e) => {
          this.fired++;
          console.log(this.fired);
            this.matter.add.sprite(this.Ship.x, this.Ship.y, KEYS.SPRITES.Missle)
                .setName("bullet")
                .setSize(50, 50)
                .setDisplaySize(30, 30)
                .setIgnoreGravity(true)
                .setAngle(this.Ship.angle - 90)
                .thrust(.02 + this.Ship.body.speed / 150)
                .setCollisionCategory(8)
                .setCollidesWith([1, 4])
                .setFrictionAir(0)
                .play(KEYS.ANIMATIONS.Missle);
        })  
    }
 
    update() {
          new KeyControls(this.Ship)
    }
    
}
