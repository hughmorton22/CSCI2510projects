import DrawGeometryComponent from "./draw-geometry-component.js"
export default class RectangleGeometryComponent extends DrawGeometryComponent{
    constructor(gameObject, width, height){
        super(gameObject);
        this.width = width;
        this.height = height;
    }
}