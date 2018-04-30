class TestStaticClass{

    // prop:2 错误写法

    myProp = 42; // 实例属性
    
    static myStaticProp = 42; // 静态属性

    constructor(){

    }
    static testFoo(){//静态方法
        return 1;
    }
    
}
export default TestStaticClass;