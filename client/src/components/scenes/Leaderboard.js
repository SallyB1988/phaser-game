import Phaser from "phaser";
import API from "../../utils/API";
export default class Leaderboard extends Phaser.Scene {
    constructor() {
        super({
            key: "Leaderboard"
        })
        API.getScores()
        .then(res => {
            this.call =res.data;
        })
    }
    init(data) {
    }
    preload(){       
      
    }
    create() {
        console.log(this.call);
        this.add.text(this.game.renderer.width *.48, 200, 'LeaderBoard')
        .setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        for (let i = 0; i < this.call.length; i++){
            this.add.text(this.game.renderer.width *.41,215+(i*15), `${this.call[i].firstName} ${this.call[i].lastName} HighScore:${this.call[i].highScore}`);
        }
       
    }
}
