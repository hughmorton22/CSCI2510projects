import * as Engine from "../../../engine/engine.js"

export default class DestroyOnRoomWall extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);

    }
    start() {
        console.log("You called start() on a DestroyOnRoomWall")
    }
    update() {
        let rectGeoComp = this.gameObject.getComponent("RectangleGeometryComponent");
        if (rectGeoComp) {
            if (this.gameObject.transform.position.x - rectGeoComp.width / 2 < -75 || this.gameObject.transform.position.y - rectGeoComp.height / 2 < -40
                || this.gameObject.transform.position.x + rectGeoComp.width / 2 > 75 || this.gameObject.transform.position.y + rectGeoComp.height / 2 > 40) {
                this.gameObject.destroy();
            }
        }

        let circGeoComp = this.gameObject.getComponent("CircleGeometryComponent");
        if (circGeoComp) {
            if (this.gameObject.transform.position.x - (circGeoComp.radius / 2) * this.gameObject.transform.localScale.x <= -75
                || this.gameObject.transform.position.y - (circGeoComp.radius / 2) * this.gameObject.transform.localScale.y <= -40
                || this.gameObject.transform.position.x + (circGeoComp.radius / 2) * this.gameObject.transform.localScale.x >= 75
                || this.gameObject.transform.position.y + (circGeoComp.radius / 2) * this.gameObject.transform.localScale.y >= 40) {
                this.gameObject.destroy();
            }
        }

        let elliGeoComp = this.gameObject.getComponent("EllipseGeometryComponent");
        if (elliGeoComp) {
            if (this.gameObject.transform.position.x - elliGeoComp.xRadius / 2 <= -75 || this.gameObject.transform.position.y - elliGeoComp.yRadius / 2 <= -40
                || this.gameObject.transform.position.x + elliGeoComp.xRadius / 2 >= 75 || this.gameObject.transform.position.y + elliGeoComp.yRadius / 2 >= 40) {
                this.gameObject.destroy();
            }
        }

    }
}