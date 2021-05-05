export default class SceneChangComponent extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
        this.tick = 0;
        this.haslost = false;
    }
    update() {
        if (this.hasLost) {
            this.tick++;
            if (this.tick > 50) {
                Engine.SceneManager.changeScene("LoseScene")
            }
        }
    }
    next() {
        let currentSceneName = Engine.SceneManager.currentScene.name;
        if (currentSceneName == "TitleScene") Engine.SceneManager.changeScene("StartRoomScene");
        else Engine.SceneManager.changeScene("TitleScene")
    }
    lose() {
        this.hasLost = true;
    }
}