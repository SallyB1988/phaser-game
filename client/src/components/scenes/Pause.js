
import Phaser from "phaser";
export default class Pause extends Phaser.Scene {
    constructor() {
        super({ key: "Pause" })
    }

    init(data) {
        console.log(data);
    }

    preload() {

    }

    create() {

        this.pauseText = this.add.text(400, 100, 'Paused');
        this.pauseText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.pauseText.setInteractive();
        this.pauseText.on("pointerdown", () => {
            console.log("click");

        })
    }
}