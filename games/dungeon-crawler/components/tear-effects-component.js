import * as Engine from "../../../engine/engine.js"

export default class DestroyOnRoomWall extends Engine.Component {
    constructor(gameObject, ovalPowerup = false, damagePowerup = false) {
        super(gameObject);
        this.ovalPowerup = ovalPowerup;
        this.damagePowerup = damagePowerup;
    }

    update() {
        //if isaac collides with any instance of the ovalPowerUp, set to true
    }
}