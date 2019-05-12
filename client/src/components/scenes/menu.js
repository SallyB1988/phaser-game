import Phaser from "phaser";
import GameScene from "./game.js"
export default class Menu extends Phaser.Scene{
    constructor () {
        super({ key: "Menu"})
    }

    init(data){
        console.log(data);
        console.log("pretty cool");

    }
    preload(){

    }

    create(){
        this.text1= this.add.text(100, 100, 'Start');
        this.text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.text1.setInteractive();
        this.text1.on("pointerdown",()=>{
            this.scene.add("Game",GameScene,false)
            this.scene.start("Game");
        })
    }

}