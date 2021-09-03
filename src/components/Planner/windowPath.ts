export interface Point {
  x: number;
  y: number;
}

export class windowDraw {
  point1: Point;
  point2: Point;
  angle: number;
  path?: Path2D;
  ctx: CanvasRenderingContext2D;

  constructor(point: Point, ctx: CanvasRenderingContext2D) {
    this.point1 = point;
    this.point2 = point;
    this.angle = this.getAngle();
    this.ctx = ctx;
  }

  getAngle() {
    const xdiff = this.point2.x - this.point1.x;
    const ydiff = this.point2.y - this.point1.y;
    const angle = Math.atan(ydiff / xdiff);
    if (xdiff < 0) return Math.PI + angle;

    return angle;
  }

  getDistance() {
    const xdiff = this.point1.x - this.point2.x;
    const ydiff = this.point1.y - this.point2.y;
    return Math.sqrt(xdiff ** 2 + ydiff ** 2);
  }

  draw() {
    const width = this.getDistance();

    // rectangle
    this.angle = this.getAngle();
    this.ctx.translate(this.point1.x + 5 / 2, this.point1.y - 20 / 2);
    this.ctx.rotate(this.angle);

    const outerRect = new Path2D()
    outerRect.rect(0, -10, width, 20)
    this.path = outerRect
    this.ctx.stroke(outerRect)
    // this.ctx.strokeRect(0, -10, width, 20);

    this.ctx.strokeRect(width / 4, -10, width / 2, 20);
    this.ctx.fillRect(width / 4, -5 / 2, width / 2, 5);


    this.ctx.strokeStyle = "#000";

    // start circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000";
    this.ctx.arc(0, 0, 5, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.fill();

    // end circle
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000";
    this.ctx.arc(width, 0, 5, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.fill();

    // reset relative
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  stretch(point: Point) {
    this.point2 = point;
    this.draw();
  }

  isPointInside(point: Point) {
    if (this.path) {
      return this.ctx.isPointInPath(this.path, point.x, point.y);
    }
    return false;
  }

}