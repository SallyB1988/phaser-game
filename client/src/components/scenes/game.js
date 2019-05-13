import Phaser from "phaser";
import Player from "../gameobjects/player.js"
import Enemy from "../gameobjects/enemy.js";
import KeyboardV2 from "../gameobjects/KeyboardV2.js"
import KeyControls from "../gameobjects/KeyboardControls"

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

        this.Duck = new Player(this,300,0,"Duck")
        
        this.Bad = new Enemy(this,400,400,"Bad")

        this.physics.add.collider(this.Bad, this.Duck, () => {
          this.Duck.hp--
          this.Duck.flip = !this.Duck.flip
          this.Duck.setFlipY(this.Duck.flip)
          console.log(this.Duck.hp);
        })
        emitter.startFollow(this.Duck);
        
        new KeyboardV2(this,this.Duck);
        
      }
      
      update() {
        new KeyControls(this.Duck)
    }
}
