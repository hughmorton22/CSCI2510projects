import Component from "../../../engine/component.js"
import Input from "../../../engine/input.js"

class ShootDirectionComponent extends Component {
  static name = "ShootDirectionComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  update() {
    if (Input.getKey("ArrowLeft")) {
      this.gameObject.transform.rotation = Math.PI;
    }
    if (Input.getKey("ArrowRight")) {
      
      this.gameObject.transform.rotation = 0;
    }
    if (Input.getKey("ArrowUp")) {
      
      this.gameObject.transform.rotation = -Math.PI/2;
    }
    if (Input.getKey("ArrowDown")) {
      
      this.gameObject.transform.rotation = Math.PI/2;
    }
  }
}

export default ShootDirectionComponent;