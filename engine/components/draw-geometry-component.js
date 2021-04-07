import Component from "../component.js"
export default class DrawGeometryComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);
    this.color = color;
  }
  draw(ctx) {
    let rectangleGeometry = this.gameObject.getComponent("RectangleGeometryComponent");
    if (rectangleGeometry) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0 - rectangleGeometry.width / 2, 0 - rectangleGeometry.height / 2, rectangleGeometry.width, rectangleGeometry.height);
    }

    let circleGeometry = this.gameObject.getComponent("CircleGeometryComponent");
    if (circleGeometry) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, circleGeometry.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    let ellipseGeometry = this.gameObject.getComponent("EllipseGeometryComponent");
    if (ellipseGeometry) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, ellipseGeometry.xRadius, ellipseGeometry.yRadius, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}