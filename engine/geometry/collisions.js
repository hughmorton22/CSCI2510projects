import Point from "./vector-2.js";
import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Ellipse from "./ellipse.js";

export default class {
  static inCollision(one, two) {
    if (one instanceof Point) {
      if (two instanceof Point) {
        return false;
      }
      if (two instanceof Circle) {
        let distance = one.distanceTo(new Point(two.x, two.y));
        if (distance < two.radius)
          return true;
        return false;
      }
      if (two instanceof Rectangle) {
        return one.x >= two.x - two.width/2 && one.y >= two.y - two.height/2 && one.x <= two.x + two.width/2 && one.y <= two.y + two.height/2;
      }
    }
    if (one instanceof Circle) {
      if (two instanceof Point) {
        return this.inCollision(two, one);
      }
      if (two instanceof Circle) {
        let sumRadii = one.radius + two.radius
        return new Point(one.x, one.y).distanceTo(new Point(two.x, two.y)) < sumRadii;
      }
      if (two instanceof Rectangle) {
        let objects = [];
        objects.push(new Circle(two.x + two.width / 2, two.y + two.height / 2, one.radius))
        objects.push(new Circle(two.x + two.width / 2, two.y - two.height / 2, one.radius))
        objects.push(new Circle(two.x - two.width / 2, two.y + two.height / 2, one.radius))
        objects.push(new Circle(two.x - two.width / 2, two.y - two.height / 2, one.radius))
        objects.push(new Rectangle(two.x, two.y, two.width + one.radius * 2, two.height))
        objects.push(new Rectangle(two.x, two.y, two.width, two.height + one.radius * 2))

        for (let object of objects) {
          if (this.inCollision(new Point(one.x, one.y), object)) {
            return true;
          }
        }
        return false;
      }
    }
    if (one instanceof Rectangle) {
      if (two instanceof Point) {
        return this.inCollision(two, one);
      }
      if (two instanceof Circle) {
        return this.inCollision(two, one)
      }
      if (two instanceof Rectangle) {
        let left1 = one.x - one.width/2;
        let right1 = one.x + one.width/2;
        let bottom1 = one.y - one.height/2;
        let top1 = one.y + one.height/2;

        let left2 = two.x - two.width/2;
        let right2 = two.x + two.width/2;
        let bottom2 = two.y - two.height/2;
        let top2 = two.y + two.height/2;

        if (left2 > right1) return false;
        if (right2 < left1) return false;
        if (bottom2 > top1) return false;
        if (top2 < bottom1) return false;
        return true;
      }
      if (two instanceof Ellipse) {
        this.inCollision(two, one)
      }
    }
    if (one instanceof Ellipse) {
      if (two instanceof Point) {
        return false;
      }
      if (two instanceof Circle) {
        return false;
      }
      if (two instanceof Rectangle) {
        // assess the ellipse in four quadrants with a bounding box
        // if the rectangle is outside of the the bounding box, then return false
        // then if the rectangle crosses an axis (vetexes in different quadrants) of the ellipse, it collides (return true)
        // finally find the vertex that is closest to the center and if that collides with the ellipse, return true, otherwise, return false
        return false;
      }
    }
    return false;
  }
}