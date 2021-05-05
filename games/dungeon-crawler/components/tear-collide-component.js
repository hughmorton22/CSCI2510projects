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
                if (Engine.EngineGeometry.Collisions.inCollision(this.gameObject.getComponent("CircleGeometryComponent").asGeometry(), enemy.getComponent("RectangleGeometryComponent").asGeometry())) {
                    this.gameObject.destroy();
                    enemy.destroy();
                }
            }
        }

    }
}