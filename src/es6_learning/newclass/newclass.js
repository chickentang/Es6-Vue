const foo = Symbol('foo');
class TestNewClass{
    constructor(){

    }
    testFoo(){//公有方法
        return this[foo]();
    }
    [foo](){//私有方法
        return 'hello tang!';
    }
}

console.log(typeof TestNewClass); // function
console.log(TestNewClass === TestNewClass.prototype.constructor); // true

export default new TestNewClass();