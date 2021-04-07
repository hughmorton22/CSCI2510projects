import DrawGeometryComponent from "./draw-geometry-component.js"
export default class CircleGeometryComponent extends DrawGeometryComponent{
    constructor(gameObject, radius){
        super(gameObject);
        this.radius = radius;
    }
}