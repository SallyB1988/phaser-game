import Phaser from "phaser";
import GameScene from "./game.js"
export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" })
    }

    init(data) {
        console.log(data);
        console.log("pretty cool");
    }

    preload() {

    }

    create() {
        
        this.startText = this.add.text(400, 300, 'Start');
        this.startText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.startText.setInteractive();
        this.startText.on("pointerdown", () => {
            this.scene.start("Game");
        })

        // this.endText= this.add.text(400, 400, 'End');
        // this.endText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        // this.endText.setInteractive();
        // this.endText.on("pointerdown",()=>{
        //     this.scene.add("Game",GameScene,false)
        //     this.scene.start("Game");
        // })
    }

}