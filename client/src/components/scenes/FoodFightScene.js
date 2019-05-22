import Phaser from "phaser";
import { KEYS_Food as KEYS } from "../../utils/KEYS_Food";

export default class FoodFightScene extends Phaser.Scene {
  constructor(props) {
    super({ key: "FoodFightScene" });
    this.props = props;
  }

  init() { }

  preload() {
    this.load.image(KEYS.IMAGES.Background, "/images/star_sky.jpg");
    this.load.image(KEYS.SPRITES.Taco, "/images/Taco.png");
    this.load.image(KEYS.SPRITES.Burger, "/images/Burger.png");
    this.load.image(KEYS.SPRITES.HotDog, "/images/HotDog.png");
    this.load.image(KEYS.SPRITES.Player,"/images/spikedship3smallgreen.png");
    this.load.spritesheet(KEYS.SPRITES.Missle, "/images/magicbullets.png", {
      frameHeight: 106,
      frameWidth: 128
    });
    this.load.audio(KEYS.AUDIO.Battle, "/audio/BossMain.wav");
    this.load.audio(KEYS.AUDIO.Intro, "/audio/BossIntro.wav");
    this.load.audio(KEYS.AUDIO.Fire, "/audio/laser_short.mp3");

    this.loadbar = this.add.graphics({
      fillStyle: {
        color: 0xf430f4 //purple color
      }
    });

    this.load.on("progress", percent => {
      this.loadbar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      ); //render in middle of screen
    });
  }

  create() {
    this.scene.start("Menu");
  }
}
