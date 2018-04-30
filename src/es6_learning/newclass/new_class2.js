class Test {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `this is x: ${this.x} , this is y: ${this.y} `;
  }
}

let out = new Test(2,3);

console.log(out.toString());

let t1 = new Test(4,5);
let t2 = new Test(5,4);

console.log(t1.__proto__ === t2.__proto__); //true

export default Test;