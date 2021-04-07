import Component from "../../../engine/component.js"
import Input from "../../../engine/input.js"

class KeyboardMoveComponent extends Component {
  static name = "KeyboardMoveComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  update() {
    if (Input.getKey('a')) {
      this.gameObject.transform.position.x -= 1 * this.speed;
      this.gameObject.transform.rotation = Math.PI;
    }
    if (Input.getKey('d')) {
      this.gameObject.transform.position.x += 1 * this.speed;
      this.gameObject.transform.rotation = 0;
    }
    if (Input.getKey('w')) {
      this.gameObject.transform.position.y -= 1 * this.speed;
      this.gameObject.transform.rotation = -Math.PI/2;
    }
    if (Input.getKey('s')) {
      this.gameObject.transform.position.y += 1 * this.speed;
      this.gameObject.transform.rotation = Math.PI/2;
    }
  }

}

export default KeyboardMoveComponent;