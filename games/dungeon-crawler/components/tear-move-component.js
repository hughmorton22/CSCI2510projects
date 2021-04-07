import Component from "../../../engine/component.js"

class TearMoveComponent extends Component {
  static name = "TearMoveComponent";
  constructor(gameObject, xSpeed = 1, ySpeed = 0) {
    super(gameObject);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  update() {
    this.gameObject.transform.position.x += 0.5 * this.xSpeed;
    this.gameObject.transform.position.y += 0.5 * this.ySpeed;
  }
}

export default TearMoveComponent;