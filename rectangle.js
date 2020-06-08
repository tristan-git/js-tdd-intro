// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    return this.a === this.b ? true : false;
  }

  getArea() {
    return this.a * this.b;
  }

  getPerimeter() {
   return this.isSquare() ? this.a * this.b : (this.a + this.b) * 2;
  }
}

module.exports = Rectangle;
