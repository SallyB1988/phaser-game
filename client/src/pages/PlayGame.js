import React, { Component } from "react";

// import phaserGame from "../components/game" // will import when component becomes functional 
import Phaser, { Renderer } from "phaser";

class PlayGame extends Component {

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
          }
        },
        scene: {
        preload: this.preload,
        create: this.create,
        update: this.update,
      }
    };

  let game = new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  preload ()
  {
    
    this.load.image('stars', '/images/star_sky.jpg');
    this.load.image('Duck', '/images/muscleDuck.png');
    this.load.image('Bad', '/images/unicornduck.jpeg');
    this.load.image('red', 'assets/particles/red.png');
  }

  create ()
  {
    this.add.image(0, 0, 'stars').setOrigin(0,0);
    
    var particles = this.add.particles('red');
    
    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      });
    this.Duck = this.physics.add.sprite(400,0,"Duck")
    this.Duck.setScale(.1,.1)
    this.Duck.body.setAllowGravity(false)
    this.Duck.setBounce(1, 1);
    this.Duck.setCollideWorldBounds(true);


    this.Bad = this.physics.add.sprite(100,0,"Bad")
    this.Bad.setScale(.1,.1)
    this.Bad.body.setGravityY(0)
    this.Bad.setBounce(1, 1);
  
  
    // Duck = this.physics.add.image(0,0,'');
    this.Bad.setVelocity(100, 200);
    this.Bad.setCollideWorldBounds(true);
    this.physics.add.collider(this.Bad,this.Duck)
    
    emitter.startFollow(this.Duck);
    console.log(this.Duck);
    console.log(this.Duck);

  }

  update(){
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown)
    {
        this.Duck.setVelocityX(-300);

    }
     if (cursors.right.isDown)
    {
        this.Duck.setVelocityX(300);

    }
     if (cursors.down.isDown)
    {
        this.Duck.setVelocityY(300);
        // this.Duck.setVelocityX(0);
    }
      if (cursors.up.isDown)
    {
        this.Duck.setVelocityY(-300);
        // this.Duck.setVelocityX(0);

    }
    else if(cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp){
        this.Duck.setVelocityX(0);
        this.Duck.setVelocityY(0)
    }
    
  

  }

  render() {
    return (null)
  }

}
export default PlayGame;