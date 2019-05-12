import Phaser from "phaser";
import Menu from "./menu.js"
export default class LoadScene extends Phaser.Scene{
    constructor () {
        super({ key: "LoadScene"})
    }

    init(){

    }
    preload(){
        this.load.image('stars', '/images/star_sky.jpg');
        this.load.image('Duck', '/images/muscleDuck.png');
        this.load.image('Bad', '/images/unicornduck.jpeg');
        this.load.image('red', 'assets/particles/red.png');

        this.loadbar = this.add.graphics({
            fillStyle:{
                color: 0xf430f4 //purple color
            }
        })

        this.load.on("progress",(percent)=>{

            console.log(percent);
            this.loadbar.fillRect(0,this.game.renderer.height/2, (this.game.renderer.width*percent),50) //render in middle of screen
        })

    }

    create(){
        this.scene.add("Menu",Menu,false)
        this.scene.start("Menu","Passing Data Around")
    }

}