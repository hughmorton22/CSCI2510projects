import * as Engine from "../../../engine/engine.js"

const SceneManager = Engine.SceneManager;

export default class TearCollideComponent extends Engine.Component {

    constructor(gameObject) {
        super(gameObject);
    }

    update() {
        
        let enemy = SceneManager.currentScene.getGameObject("SimpleEnemy");

        if (this.gameObject) {
            if (enemy) {
                let rectGeo = enemy.getComponent("RectangleGeometryComponent").asGeometry();
                let circGeo = this.gameObject.getComponent("CircleGeometryComponent").asGeometry();
                rectGeo.width = rectGeo.width * this.gameObject.transform.localScale.x;
                rectGeo.height = rectGeo.height * this.gameObject.transform.localScale.y;
                if (Engine.EngineGeometry.Collisions.inCollision(rectGeo, circGeo)) {
                    this.gameObject.destroy();
                    enemy.destroy();
                }
            }
        }

    }
}