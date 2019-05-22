import Phaser, { Sound } from "phaser";
// import { KEYS, enemies } from "../../utils/KEYS_Food";
import { Player, Enemy } from "../gameobjects/Characters";
import KeyboardV2 from "../gameobjects/KeyboardV2";
import KeyControls from "../gameobjects/KeyboardControls";

export default class Game extends Phaser.Scene {
  constructor(props) {
    super({ key: "Game" });
    this.props = props;
  }

  init() {
    this.fired = 0;
    this.KEYS = this.props[5].KEYS;
    this.enemies = this.props[5].enemies;
  }

  preload() {
    this.anims.create({
      key: this.KEYS.ANIMATIONS.Missle,
      frameRate: 4,
      repeat: 0,
      frames: this.anims.generateFrameNumbers(this.KEYS.SPRITES.Missle, {
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
          this.props[3]();    // navigate to scoreboard
          this.props[2]();    // call game over function
        }
      }
    });
    //Background
    this.add.image(0, 0, this.KEYS.IMAGES.Background).setScale(4);
    //Player
    this.Ship = new Player(this.mWorld, 780, 580, this.KEYS.SPRITES.Player);

    //Camera
    this.cameras.main.startFollow(this.Ship).setZoom(0.75);
    //audio
    this.sound.pauseOnBlur = false;
    this.sound.loopEndOffset = 2;
    this.intro = this.sound.add(this.KEYS.AUDIO.Intro);
    this.music = this.sound.add(this.KEYS.AUDIO.Battle);
    this.bulletSound = this.sound.add(this.KEYS.AUDIO.Fire);
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
      this.bulletSound.play();
      this.fired++;
      this.props[1](this.fired);
      this.matter.add
        .sprite(this.Ship.x, this.Ship.y, this.KEYS.SPRITES.Missle)
        .setName("bullet")
        .setSize(50, 50)
        .setDisplaySize(30, 30)
        .setIgnoreGravity(true)
        .setAngle(this.Ship.angle - 90)
        .thrust(0.04 + this.Ship.body.speed / 150)
        .setCollisionCategory(8)
        .setCollidesWith([1, 4])
        .setFrictionAir(0)
        .play(this.KEYS.ANIMATIONS.Missle);
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
      this.props[4]();
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
    return this.enemies[Math.floor(Math.random() * this.enemies.length)]
  }

  spawnPoint(){

    let x = Phaser.Math.Between(200, 1400)
    let y = Phaser.Math.Between(200, 1000)
    console.log(Phaser.Math.Distance.Between(x,y,this.Ship.x,this.Ship.y));

    if(Phaser.Math.Distance.Between(x,y,this.Ship.x,this.Ship.y)<300){
    this.spawnPoint()
    }
    else{
    new Enemy(this.mWorld, x, y, this.getRandomEnemy());
    this.enemiesOnScreen++;
    }
  }

}
