import DrawGeometryComponent from "./draw-geometry-component.js"
export default class EllipseGeometryComponent extends DrawGeometryComponent{
    constructor(gameObject, xRadius, yRadius){
        super(gameObject);
        this.xRadius = xRadius;
        this.yRadius = yRadius;
    }
}