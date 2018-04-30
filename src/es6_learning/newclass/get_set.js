class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.rectangleArea = 0;
  }
  get area() { // getter 方法
    this.rectangleArea = this.calcArea();
    return this.rectangleArea;
  }
  set area(value) { // setter 方法
    this.rectangleArea = value;
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

//调用方式

console.log(square.area); // 100

console.log(square.area = 400); // 400


export default Rectangle;
