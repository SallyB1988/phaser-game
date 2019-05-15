
import Phaser from "phaser";
export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" })
    }

    init() {
    }

    preload() {

    }

    create() {
        
        this.startText = this.add.text(-10+this.game.renderer.width/2, this.game.renderer.height/2, 'Start');
        this.startText.setScale(2);
        this.startText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.startText.setInteractive();

        this.startText.on("pointerdown", () => {
            this.scene.start("Game","open");
        })
    }

}