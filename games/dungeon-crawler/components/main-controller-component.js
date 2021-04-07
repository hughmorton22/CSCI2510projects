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
                return SceneManager.changeScene("StartRoomScene");
            }

            this.isaac.transform.position.x = -75 + rectGeoComp.width / 2;
        }
        if (this.isaacX + rectGeoComp.width / 2 > 75) {
            //Move right
            if (SceneManager.currentScene.name == "StartRoomScene") {
                return SceneManager.changeScene("RightRoomScene");
            }

            this.isaac.transform.position.x = 75 - rectGeoComp.width / 2;
        }

        // if (this.isaacX - rectGeoComp.width / 2 < -75) {
        //     //Move Right
        //     this.isaac.transform.position.x = -75 + rectGeoComp.width / 2;
        // }
        // if (this.isaacX + rectGeoComp.width / 2 > 75) {
        //     //Move Left
        //     this.isaac.transform.position.x = 75 - rectGeoComp.width / 2;
        // }
        if (this.isaacY - rectGeoComp.height / 2 < -40) {
            //Move up
            this.isaac.transform.position.y = -40 + rectGeoComp.height / 2;
        }
        if (this.isaacY + rectGeoComp.height / 2 > 40) {
            //Move Down
            this.isaac.transform.position.y = 40 - rectGeoComp.height / 2;
        }
    }
}