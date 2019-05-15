export default class KeyboardControls {

    constructor(obj) {

        if (obj.cursors.left.isDown) {
            obj.setAngularVelocity(-obj.turnSpeed)
        }
        if (obj.cursors.right.isDown) {
            obj.setAngularVelocity(obj.turnSpeed);
        }
        if (obj.cursors.down.isDown) {
            obj.thrustRight(obj.speed);
        }
        if (obj.cursors.up.isDown) {
            // obj.setVelocityY(-10);
            obj.thrustLeft(obj.speed);
        }
        if (obj.cursors.left.isUp && obj.cursors.right.isUp) {
            obj.setAngularVelocity(0)
        }      
        if (obj.cursors.up.isUp && obj.cursors.down.isUp) {
            // obj.setVelocityY(0)
        }

    }

}