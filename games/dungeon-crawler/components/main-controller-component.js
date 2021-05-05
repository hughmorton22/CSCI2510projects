import * as Engine from "../../../engine/engine.js"

const SceneManager = Engine.SceneManager;

export default class MainControllerComponent extends Engine.Component {

    constructor(gameObject) {
        super(gameObject);
    }

    start() {
        this.isaac = SceneManager.currentScene.getGameObject("Isaac");

    }

    update() {
        this.isaacX = this.isaac.transform.position.x;
        this.isaacY = this.isaac.transform.position.y;
        console.log(this.isaacX + " " + this.isaacY)
        let rectGeoComp = this.isaac.getComponent("RectangleGeometryComponent");
        if (this.isaacX - rectGeoComp.width / 2 < -75) {
            //Move left
            if (SceneManager.currentScene.name == "RightRoomScene") {
                SceneManager.changeScene("StartRoomScene");
                SceneManager.currentScene.getGameObject("Isaac").transform.position.x = 75 - rectGeoComp.width / 2;
                SceneManager.currentScene.getGameObject("Isaac").transform.position.y = this.isaacY;
                return;
            }

            this.isaac.transform.position.x = -75 + rectGeoComp.width / 2;
        }
        if (this.isaacX + rectGeoComp.width / 2 > 75) {
            //Move right
            if (SceneManager.currentScene.name == "StartRoomScene") {
                SceneManager.changeScene("RightRoomScene");
                SceneManager.currentScene.getGameObject("Isaac").transform.position.x = -75 + rectGeoComp.width / 2;
                SceneManager.currentScene.getGameObject("Isaac").transform.position.y = this.isaacY;
                return;
            }

            this.isaac.transform.position.x = 75 - rectGeoComp.width / 2;
        }
        if (this.isaacY - rectGeoComp.height / 2 < -40) {
            //Move up
            this.isaac.transform.position.y = -40 + rectGeoComp.height / 2;
        }
        if (this.isaacY + rectGeoComp.height / 2 > 40) {
            //Move Down
            this.isaac.transform.position.y = 40 - rectGeoComp.height / 2;
        }

        let enemy = SceneManager.currentScene.getGameObject("SimpleEnemy");
        let dPower = SceneManager.currentScene.getGameObject("DamagePowerup");
        let ePower = SceneManager.currentScene.getGameObject("EllipsePowerup");

        if (enemy) {
            if (Engine.EngineGeometry.Collisions.inCollision(this.isaac.getComponent("RectangleGeometryComponent").asGeometry(), enemy.getComponent("RectangleGeometryComponent").asGeometry())) {
                enemy.destroy();
            }
        }

        if (dPower) {
            if (Engine.EngineGeometry.Collisions.inCollision(this.isaac.getComponent("RectangleGeometryComponent").asGeometry(), dPower.getComponent("RectangleGeometryComponent").asGeometry())) {
                dPower.destroy();
                let eye = this.isaac.getGameObject("Eye");
                let eyeGeoComp = eye.getComponent("DrawGeometryComponent");
                let eyeShootComp = eye.getComponent("ShootTearComponent");
                eyeGeoComp.color = "maroon";
                eyeShootComp.damagePowerup = true;
            }
        }

        if (ePower) {
            if (Engine.EngineGeometry.Collisions.inCollision(this.isaac.getComponent("RectangleGeometryComponent").asGeometry(), ePower.getComponent("RectangleGeometryComponent").asGeometry())) {
                ePower.destroy();
                let eye = this.isaac.getGameObject("Eye");
                let eyeShootComp = eye.getComponent("ShootTearComponent");
                eyeShootComp.ovalPowerup = true;
            }
        }

        // See scene.js update to try and develop for all tears
        // let tear = SceneManager.currentScene.getGameObject("Tear");

        // if (tear) {
        //     if (enemy) {
        //         if (Engine.EngineGeometry.Collisions.inCollision(tear.getComponent("CircleGeometryComponent").asGeometry(), enemy.getComponent("RectangleGeometryComponent").asGeometry())) {
        //             tear.destroy();
        //             enemy.destroy();
        //         }
        //     }
        // }

    }
}