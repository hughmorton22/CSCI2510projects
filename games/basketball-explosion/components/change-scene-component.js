import Component from "../../../engine/component.js"
import SceneManager from "../../../engine/scene-manager.js";

class ChangeSceneComponent extends Component{

    static name = "ChangeSceneComponent";

    constructor(gameObject){
        super(gameObject);
        this.tick = 0;
    }

    //uses a string input to decide direction for the object to move
    update(){
        this.tick++;
        if(this.tick > 375) {
            if(SceneManager.currentScene.name == "CourtScene") {
                SceneManager.changeScene("ExplosionScene");
            }
            else {
                SceneManager.changeScene("CourtScene");
            }
        }
        
    }
}

export default ChangeSceneComponent;