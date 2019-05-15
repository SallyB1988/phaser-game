import Phaser from "phaser";
export default class Hud extends Phaser.Scene {
    constructor() {
        super({ key: "Hud" })
    }
    init(data) {
        this.Ship = data
    }
    create() {
        this.pointText = this.add.text(0, 0, 'Score: '+this.Ship.score);
        this.pointText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000).setScale(2);    
    }
    update(){
    this.pointText.setText('Score: '+this.Ship.score);
    }
}