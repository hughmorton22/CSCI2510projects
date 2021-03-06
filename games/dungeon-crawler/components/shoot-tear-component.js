import * as Engine from "../../../engine/engine.js"
import Input from "../../../engine/input.js"

export default class ShootTearComponent extends Engine.Component {
  constructor(gameObject, ovalPowerup = false, damagePowerup = false) {
    super(gameObject);
    this.tick = 101;
    this.ovalPowerup = ovalPowerup;
    this.damagePowerup = damagePowerup;
  }
  update() {

    if (this.tick > 100 && (Input.getKey("ArrowLeft") || Input.getKey("ArrowRight")
      || Input.getKey("ArrowUp") || Input.getKey("ArrowDown"))) {

      console.log("Shoot tear")
      this.tick = 0;
      let newTear;

      if (!this.ovalPowerup) {
        newTear = Engine.SceneManager.currentScene.instantiate({
          prefabName: "Tear",
          x: this.gameObject.transform.worldPosition.x,
          y: this.gameObject.transform.worldPosition.y
        })
      }
      else {
        newTear = Engine.SceneManager.currentScene.instantiate({
          prefabName: "Tear",
          x: this.gameObject.transform.worldPosition.x,
          y: this.gameObject.transform.worldPosition.y,
          sx:0.75,
          sy:1.5
          //rotation:this.gameObject.transform.worldRotation.rotation
        })
      }

      let moveComp = newTear.getComponent("TearMoveComponent");

      if (Input.getKey("ArrowLeft")) {
        moveComp.xSpeed = -1;
        moveComp.ySpeed = 0;
      }
      else if (Input.getKey("ArrowRight")) {
        moveComp.xSpeed = 1;
        moveComp.ySpeed = 0;
      }
      else if (Input.getKey("ArrowUp")) {
        moveComp.xSpeed = 0;
        moveComp.ySpeed = -1;
      }
      else if (Input.getKey("ArrowDown")) {
        moveComp.xSpeed = 0;
        moveComp.ySpeed = 1;
      }

      if (this.damagePowerup) {
        let drawGeoComp = newTear.getComponent("DrawGeometryComponent");
        drawGeoComp.color = "red";
      }


    }
    else {
      this.tick++;
    }
  }
}