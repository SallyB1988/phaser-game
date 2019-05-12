import Phaser from "phaser";

export default class KeyboardInputs {

    constructor(obj) {
        
        if (obj.cursors.left.isDown) {
            obj.setVelocityX(-300);
        }
        if (obj.cursors.right.isDown) {
            obj.setVelocityX(300);
        }
        if (obj.cursors.down.isDown) {
            obj.setVelocityY(300);
        }
        if (obj.cursors.up.isDown) {
            obj.setVelocityY(-300);
        }
        if (obj.cursors.left.isUp && obj.cursors.right.isUp) {
            obj.setVelocityX(0);
        }
        if (obj.cursors.up.isUp && obj.cursors.down.isUp) {
            obj.setVelocityY(0)
        }

    }

}