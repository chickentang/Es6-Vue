class RegExpLearning {

  testRegExp() {
    var text = "𠮷";

    console.log(text.length); // 2
    console.log(/^.$/.test(text)); // false
    console.log(/^.$/u.test(text)); // false
    // console.log(text.charAt(0));        // ""
    // console.log(text.charAt(1));        // ""
    // console.log(text.charCodeAt(0));    // 55362
    // console.log(text.charCodeAt(1));    // 57271
  }

  testIncludes() {
    let tempArray = [1, "4", "uu", 5];
    let tempStr = "test123uuunit582";
    console.log(tempArray.includes("5"));
    console.log(tempStr.includes("test123", 1)); //从第二个位置进行匹配
  }

  testStartsWith() {
    //let tempArray = [1,"4","uu",5];
    let tempStr = "test123uuunit582";
    console.log(tempStr.startsWith("5"));
    console.log(tempStr.startsWith("test123", 0)); //从第二个位置进行匹配
  }

  testEndsWith() {//从1开始，由左向右进行计算，第1位从左一开始匹配就是True
    //let tempArray = [1,"4","uu",5];
    let tempStr = "test123uuunit582";
    console.log(tempStr.endsWith("5"));
    console.log(tempStr.endsWith("t",1) + " is come"); //从第二个位置进行匹配
  }
}

export default new RegExpLearning();
