import Phaser from "phaser";
import DB from "../../controllers/usersController"

export default class Gameover extends Phaser.Scene {
    constructor() {
        super({ key: "Gameover" })
    }
    init(data) {
        this.music= data[0]
        this.intro= data[1]
        this.ship = data[2]
    }
    preload(){
        
        
    }
    create() {
        this.gameoverText = this.add.text(-10+this.game.renderer.width/2, 100, 'Gameover');
        this.gameoverText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.playAgainButton = this.add.text(-10+this.game.renderer.width*.39, 400, 'Play Again');
        this.playAgainButton.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.playAgainButton.setInteractive();
        this.playAgainButton.on("pointerdown", () => {
            this.music.destroy();
            this.intro.destroy();
            this.scene.start("Game","open");
            this.scene.stop("Leaderboard");
        })

        this.leaderboardButton = this.add.text(this.game.renderer.width*.56, 400, 'Leaderboard');
        this.leaderboardButton.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.leaderboardButton.setInteractive();
        this.leaderboardButton.on("pointerdown", () => {
            this.scene.launch("Leaderboard","open");
        })


       
        this.input.keyboard.on('keyup_M', (e) => {  
            if(this.music.config.mute){
                this.music.setMute(false);
                this.intro.setMute(false);
            }
            else{
                this.music.setMute(true)
                this.intro.setMute(true)
            }    
        })  
    }
}