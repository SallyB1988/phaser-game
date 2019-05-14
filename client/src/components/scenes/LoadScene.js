import Phaser from "phaser";
import KEYS from "../../utils/KEYS"
export default class LoadScene extends Phaser.Scene{
    constructor () {
        super({ key: "LoadScene"})
    }

    init(){

    }
    
    preload(){
        this.load.image(KEYS.IMAGES.Stars, '/images/star_sky.jpg');
        this.load.image(KEYS.SPRITES.Duck, '/images/muscleDuck.png');
        this.load.image(KEYS.SPRITES.Enemy, '/images/unicornduck.jpeg');
        this.load.image(KEYS.SPRITES.GreenShip, '/images/spikedship3smallgreen.png');
        this.load.image(KEYS.SPRITES.RedShip,'/images/spikedship3smallred.png')
        this.load.spritesheet('bullet', '/images/bullets.png',{
            frameHeight:200,
            frameWidth:200,
        });
      

        this.loadbar = this.add.graphics({
            fillStyle:{
                color: 0xf430f4 //purple color
            }
        })

        this.load.on("progress",(percent)=>{
            this.loadbar.fillRect(0,this.game.renderer.height/2, (this.game.renderer.width*percent),50) //render in middle of screen
        })

    }

    create(){
        this.scene.start("Menu","Passing Data Around")
    }

}