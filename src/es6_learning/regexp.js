import base from './base_class';
const normalize = Symbol('normalize');
class RegExpLearning extends base {

  constructor(consoles){
     super();
     this.consoles = consoles;
  }
  /**
   * 完全支持UTF-16，接受编码单元的位置而非字符位置作为参数，返回与字符串中给定位置对应的码位，即一个整数值：
   */
  testRegExp() {
    var text = "𠮷a";

    console.log(text.charCodeAt(0)); //55362
    console.log(text.codePointAt(0)); //134017

    console.log(String.fromCodePoint(134071)); // "𠮷"

    console.log(this[normalize]('\u01D1') === this[normalize]('\u004F\u030C')) // true

    // console.log(text.length); // 2
    // console.log(/^.$/.test(text)); // false
    // console.log(/^.$/u.test(text)); // false
    // console.log(text.charAt(0));        // ""
    // console.log(text.charAt(1));        // ""
    // console.log(text.charCodeAt(0));    // 55362
    // console.log(text.charCodeAt(1));    // 57271
  }

  [normalize](text) {//私有方法
      return text.normalize();
  }

  normalize(values) {//把字符串标准化为同一种形式
    return values.map((text) => {
      return text.normalize();
    })
  }

  testTemplateStr(){
    /* let str = `
      <ul>
          <li>first</li>
          <li>second</li>
      </ul>
    `.trim(); */
    //写法一
    let str = 'return ' + '`ni hao ${name}`';
    let func = new Function('name',str);
    let data = func('uct');
    //写法二
    let str2 = '(name) => `ni hao ${name}`';
    let func2 = eval.call(null,str2);
    let data2 = func2('uct');

    console.log(data + '  ' + data2);

  }


  testIncludes() {
    let tempArray = [1, "4", "uu", 5];
    let tempStr = "test123uuunit582";
    console.log(tempArray.includes(5)); //true
    console.log(tempStr.includes("test123", 1)); //从第二个位置进行匹配
  }

  testStartsWith() {
    //let tempArray = [1,"4","uu",5];
    let tempStr = "test123uuunit582";
    console.log(tempStr.startsWith("test")); //true
    console.log(tempStr.startsWith("test123", 0)); //从第一个位置进行匹配
  }

  testEndsWith() {//16 - 6 = 10 ，从右数第10位开始匹配，由左向右进行匹配
    //let tempArray = [1,"4","uu",5];
    let tempStr = "test123uuunit582";
    //console.log(tempStr.endsWith("5"));
    console.log(tempStr.endsWith("12",6) + " is test endswith " +`字符串的长度是：${tempStr.length}`); //从第六个位置进行匹配
  }

  testRepeat(){
    let tempStr = "hello lilei !";
    console.log(`Repeat方法输出是：${tempStr.repeat(3)}`);
  }

  testFlags(){
    let reg = /ab/g;
    // console.log(`Flags属性值是： ${reg.flags}`)
    //return this.arrayConsole(`Flags属性值是： ${reg.flags}`);//方法中不能调用继承的方法
    return  base.arrayConsole(`Flags属性值是： ${reg.flags}`);
  }

}

export default new RegExpLearning();
