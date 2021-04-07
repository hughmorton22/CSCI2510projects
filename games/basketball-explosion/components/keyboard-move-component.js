import Component from "../../../engine/component.js"
import Input from "../../../engine/input.js"

class KeyboardMoveComponent extends Component {
  static name = "KeyboardMoveComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  update() {
    if (Input.getKey("ArrowLeft") || Input.getKey('a')) this.gameObject.transform.position.x -= 1 * this.speed;
    if (Input.getKey("ArrowRight") || Input.getKey('d')) this.gameObject.transform.position.x += 1 * this.speed;
    if (Input.getKey("ArrowUp") || Input.getKey('w')) this.gameObject.transform.position.y -= 1 * this.speed;
    if (Input.getKey("ArrowDown") || Input.getKey('s')) this.gameObject.transform.position.y += 1 * this.speed;
  }

}

export default KeyboardMoveComponent;