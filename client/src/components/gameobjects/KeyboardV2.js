import Phaser from "phaser";

export default class KeyboardV2 extends Phaser.Input.InputPlugin {
    constructor(scene, obj) {
        super(scene, obj);
        obj.cursors = scene.input.keyboard.createCursorKeys();
    }
}