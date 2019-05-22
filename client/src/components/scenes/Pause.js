import Phaser from "phaser";
export default class Pause extends Phaser.Scene {
    constructor() {
        super({ key: "Pause" })
    }
    init(data) {
        this.music= data[0]
        this.intro= data[1]
        this.bulletSound= data[2]
    }
    create() {
        this.pauseText = this.add.text(-10+this.game.renderer.width/2, 100, 'Pause');
        this.pauseText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.input.keyboard.on('keyup_ENTER', (e) => {
            this.scene.resume("Game");
            this.scene.stop("Pause");
        })
        this.input.keyboard.on('keyup_M', (e) => {  
            if(this.music.config.mute){
                this.music.setMute(false);
                this.intro.setMute(false);
                this.bulletSound.setMute(false);
            }
            else{
                this.music.setMute(true)
                this.intro.setMute(true)
                this.bulletSound.setMute(true);
            }    
        })  
    }
}