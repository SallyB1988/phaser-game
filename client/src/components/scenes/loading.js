import Phaser from "phaser";
import Menu from "./menu.js"
export default class LoadScene extends Phaser.Scene{
    constructor () {
        super({ key: "LoadScene"})
    }

    init(){

    }
    preload(){
        this.load.image('stars', '/images/star_sky.jpg');
        this.load.image('Duck', '/images/muscleDuck.png');
        this.load.image('Bad', '/images/unicornduck.jpeg');
        this.load.image('red', 'assets/particles/red.png');

    }

    create(){
        this.scene.add("Menu",Menu,false)
        this.scene.start("Menu","Passing Data Around")
    }

}