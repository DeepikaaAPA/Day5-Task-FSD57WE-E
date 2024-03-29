class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }
  getArea() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
let c = new Circle();
console.log(c.toString());
/*O/P : Circle[radius=1,color=red]*/

c = new Circle(20);
console.log(c.toString());
/*O/P : Circle[radius=20,color=red]*/

c = new Circle(30, "yellow");
console.log(c.toString());
/*O/P : Circle[radius=30,color=yellow]*/

c.setRadius(23);
c.setColor("blue");
console.log(c.toString());
/*Circle[radius=23,color=blue]*/

console.log(
  "radius=",
  c.getRadius(),
  "color=",
  c.getColor(),
  "area=",
  c.getArea(),
  "circumference=",
  c.getCircumference()
);
/*23 'blue' '1661.90' '144.51'*/
