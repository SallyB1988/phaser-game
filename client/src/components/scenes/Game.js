import Phaser from "phaser";
import KEYS from "../../utils/KEYS";
import { Player, Enemy } from "../gameobjects/Characters";
import KeyboardV2 from "../gameobjects/KeyboardV2";
import KeyControls from "../gameobjects/KeyboardControls";

const enemies = [KEYS.SPRITES.YellowDuck, KEYS.SPRITES.GreenDuck, KEYS.SPRITES.PinkDuck, KEYS.SPRITES.PurpleDuck];

export default class Game extends Phaser.Scene {
  constructor(props) {
    super({ key: "Game" });
    this.props = props;
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
    });
    this.maxEnemies = 1;
    this.enemiesOnScreen = 0;
  }

  create = () => {
    //matter world
    this.mWorld = this.matter.world.setBounds(
      0,
      0,
      1600,
      1200,
      32,
      true,
      true,
      true,
      true
    );
    this.mWorld.on("collisionstart", (pair, bod1, bod2) => {
      // body1 and body2 will either be a player, an enemy or the wall
      let body1 = bod1.gameObject ? bod1.gameObject.name : "wall";
      let body2 = bod2.gameObject ? bod2.gameObject.name : "wall";

      // something hit a wall. Destroy object if it was a bullet
      if (body1 === "wall" || body2 === "wall") {
        if (body1 === "bullet") {
          bod1.gameObject.destroy();
        } else if (body2 === "bullet") {
          bod2.gameObject.destroy();
        }
      } else {
        // bullet hit an enemy -- increment score and destroy both
        if (
          (body1 === "bullet" && body2 === "enemy") ||
          (body1 === "enemy" && body2 === "bullet")
        ) {
          this.Ship.score += bod1.gameObject.points || bod2.gameObject.points;
          bod1.gameObject.destroy();
          bod2.gameObject.destroy();
          this.props[0](this.Ship.score);
          this.enemiesOnScreen--;
          if(this.Ship.score % 50 === 0){
            this.maxEnemies++;
          }
        } else if (
          (body1 === "player" && body2 === "enemy") ||
          (body1 === "enemy" && body2 === "player")
        ) {
          // player and enemy collided - game over
          console.log("game over");
          this.props[2]();    // call game over function
        }
      }
    });
    //Background
    this.add.image(0, 0, KEYS.IMAGES.Stars).setScale(4);
    //Player
    this.Ship = new Player(this.mWorld, 0, 0, KEYS.SPRITES.GreenShip);

    //Camera
    this.cameras.main.startFollow(this.Ship).setZoom(0.75);
    //audio
    this.sound.pauseOnBlur = false;
    this.sound.loopEndOffset = 2;
    this.intro = this.sound.add(KEYS.AUDIO.Intro);
    this.music = this.sound.add(KEYS.AUDIO.Battle);
    this.intro.on("complete", () => {
      this.music.play({
        loop: true,
        volume: 0.5
      });
    });
    this.intro.play({ volume: 0.5 });
    //Hud
    this.scene.launch("Hud", this.Ship);
    //keyboard
    new KeyboardV2(this, this.Ship);
    this.input.keyboard.on("keyup_SPACE", e => {
      this.fired++;
      this.props[1](this.fired);
      this.matter.add
        .sprite(this.Ship.x, this.Ship.y, KEYS.SPRITES.Missle)
        .setName("bullet")
        .setSize(50, 50)
        .setDisplaySize(30, 30)
        .setIgnoreGravity(true)
        .setAngle(this.Ship.angle - 90)
        .thrust(0.02 + this.Ship.body.speed / 150)
        .setCollisionCategory(8)
        .setCollidesWith([1, 4])
        .setFrictionAir(0)
        .play(KEYS.ANIMATIONS.Missle);

    });

    // Resume game after pause
    this.input.keyboard.on("keyup_ENTER", e => {
      this.scene.launch("Pause", [this.music, this.intro]);
      this.scene.pause("Game");
    });

    // Panic -- pause game, mute sound, display panic modal
    this.input.keyboard.on("keyup_P", e => {
      this.scene.launch("Pause", [this.music, this.intro]);
      this.scene.pause("Game");

      this.music.setMute(true);
      this.intro.setMute(true);
      this.props[3]();
    });

    // Toggle the music
    this.input.keyboard.on("keyup_M", e => {
      if (this.music.config.mute) {
        this.music.setMute(false);
        this.intro.setMute(false);
      } else {
        this.music.setMute(true);
        this.intro.setMute(true);
      }
    });
  };

  update() {
    //Text
    new KeyControls(this.Ship);

    if(this.enemiesOnScreen < this.maxEnemies){

      this.spawnPoint();
    }
  }

  getRandomEnemy() {
    return enemies[Math.floor(Math.random() * enemies.length)]
  }

  spawnPoint(){

    let x = Phaser.Math.Between(200, 1400)
    let y = Phaser.Math.Between(200, 1000)
    
    console.log("this is x:"+x,"this is y:"+y);
    console.log(Phaser.Math.Distance.Between(x,y,this.Ship.x,this.Ship.y));

    if(Phaser.Math.Distance.Between(x,y,this.Ship.x,this.Ship.y)<200){
    this.spawnPoint()
    }
    else{
    new Enemy(this.mWorld, x, y, this.getRandomEnemy());
    this.enemiesOnScreen++;
    }
  }

}
