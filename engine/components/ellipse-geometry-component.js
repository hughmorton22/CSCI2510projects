import DrawGeometryComponent from "./draw-geometry-component.js"
// There is a possible collision tactic to assume no ellipse on ellipse collision and transform
// the ellipse back to a circle and apply the same transform to the other object then check for collisions.
export default class EllipseGeometryComponent extends DrawGeometryComponent{
    constructor(gameObject, xRadius, yRadius){
        super(gameObject);
        this.xRadius = xRadius;
        this.yRadius = yRadius;
    }
}