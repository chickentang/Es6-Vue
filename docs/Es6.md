## 《ES标准入门》&《UNDERSTANDING ECMACHRIPT 6》 读书摘录笔记（下） ##

### 前言
**

### 目录

> 7 . Symbol和Symbol属性
> 
> 8 . Javascript中的类
> 
> 9 . Promise、Generator函数、Async函数
> 
> 10 . 代理（Proxy）和反射（Reflection）API
> 
> 11 . 修饰器
> 
> 12 . Module



### 七、Symbol和Symbol属性
Es5中包含5种原始类型：字符串、数字型、布尔型、null和undefined。Es6引入了第6种原始类型：Symbol，表示独一无二的值。

值得摘录的有以下几点：

##### 1. Symbol作为属性名

		readProperty(){
	        let mySymbol = Symbol();
	        let mySymbol2 = Symbol();
	        let a = {};
	        a[mySymbol]  =  'Hello';//唯一属性
	        let b = {
	            [mySymbol2]:'nihao',//唯一属性
	        }
	    }
	

##### 2. 共享Symbol: Symbol.for()

		// Symbol.for()方法会在全局搜索键为‘uid’的Symbol，每次传入相同的键调用Symbol.for()方法会返回相同的Symbol

		testSymbolFor() {
	        let uid = Symbol.for('uid');
	        let object = {
	            [uid]: "123456",
	        };
	        console.log(object[uid]);  // 123456
	        console.log(uid);          // Symbol(uid) 
	        let uid2 = Symbol.for('uid');
	        console.log(uid === uid2); // true
	        console.log(object[uid2]); // 123456
	        console.log(uid2);         // Symbol(uid)
	    }

##### 3. 内置的Symbol值

> Symbol.isConcatSpreadable，表示该对象使用Array.prototype.concat()时是否可以展开

		//数组的默认行为是可以展开的
		 let arr1 = ['c','d'];
        console.log(['a','b'].concat(arr1,'e')); // ["a", "b", "c", "d", "e"]

		//手动设置为False之后就不会展开
        let arr2 = ['c','d'];
        arr2[Symbol.isConcatSpreadable] = false;
        console.log(['a','b'].concat(arr2,'e')); // ["a", "b", Array(2), "e"]
		
		
### 八、Javascript中的类
Es6提供了更接近传统语言（比如Java中的类）的写法，引入了Class（类）这个概念作为对象的模板，通过class关键字可以定义类。


值得摘录的有以下几点：

##### 1. 类的数据类型就是函数,类本身就指向构造函数

		class Point{
			//...
		}

		console.log(typeof Point); // "function"

		Point === Point.prototype.constructor // true

##### 2. 类的实例对象

> 一个类必须有一个constructor方法 ，如果没有显式定义，一个空的constructor方法会被默认添加

		class test{}

		//等同于
		class test{
			constructor(){}
		}

> 类的所有实例共享一个原形对象

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
		
		console.log(out.toString()); // this is x: 2 , this is y: 3 
		
		let t1 = new Test(4,5);
		let t2 = new Test(5,4);
		
		console.log(t1.__proto__ === t2.__proto__); //true
		
		export default Test;	

##### 3. 访问器属性

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

##### 4. 私有方法

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
		export default new TestNewClass();

##### 5. 静态方法，不需要New，静态属性、实例属性

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

##### 6. 生成器方法（Generator）

		class MyClass{
		    *createIterator(){
		        yield 1;
		        yield 2;
		        yield 3;
		    }
		}
		
		for(let x of new MyClass().createIterator()){
		    console.log(x); //1,2,3
		}
		
		export default new MyClass();

##### 7. 类的继承

> 关于super()：
> 只可在派生类的构造函数中使用Super()，在构造函数初始化This之前一定要调用Super()，它负责初始化this，如果不想调用Super()，唯一的方法是让类的构造函数返回一个对象。

	//父类 class super
	export default class Rectangle{
	    constructor(length,width){
	        this.length = length;
	        this.width = width;
	    }
	
	    getArea(){
	        return this.length * this.width;
	    }
		
		//静态方法
		static getPerimeter(){
	        return ( this.length + this.width) * 2;
	    }

	}

	//子类 class extends
	import Rectangle from './class_super';

	export default class Square extends Rectangle{
	    constructor(length){
	        console.log(new.target.name); // Square 指向当前正在执行的函数
	        super(length,length);
	    }
	
	    // 覆写方法
	    getArea(){
	        return `覆写后的面积是： ${ this.length * this.length}`;
	    }
	
	}

	// 调用
	const instance = new Square(2);

	instance.getArea(),// 覆写后的面积是： 4

    instance instanceof Square,// true

    Square.getPerimeter(2,3),// 10


##### 8. 类的Mixin模式

	let SerializableMixin = {
	    serialize(){
	        return JSON.stringify(this);
	    }
	}
	
	let AreaMixin = {
	    getArea(){
	        return this.length * this.width;
	    }
	}
	
	function mixin(...mixins){
	    var base = function(){}
	    Object.assign(base.prototype, ...mixins);
	    return base;
	}

	//混合模式，利用函数的继承
	export default class Square extends mixin(AreaMixin,SerializableMixin){
	    constructor(length){
	        super();
	        this.length = length;
	        this.width = length;
	    }
	}

	//调用

	let x = new Square(3);
	x.getArea(), // 9
    x.serialize(), // {"length":3,"width":3}

### 九、Promise、Generator函数、Async函数
Nodejs用回调函数代替了事件，使异步编程在Javascript领域更加流行。但当更多程序开始使用异步编程时，事件和回调函数却不能满足开发者想要做的所有事情。为了不让自己陷入回调地狱，可以使用Promise。


值得摘录的有以下几点：

##### 1. Promise生命周期

每个Promise都会经历一个短暂的生命周期，知道这个过程很重要：先是处于进行中（Pending），此时操作尚未完成，所以也是（unsettled）的；一旦异步操作执行结束，Promise则变成已处理（Settled）状态，具体可以是Fulfilled（Promise异步操作成功完成）或者Rejected（由于程序错误或一些其他原因，Promise异步操作未能成功完成）。

> 所有的Promise都有Then()方法，它接受两个参数：第一个是当Promise的状态变为Fulfilled时要调用的函数，与异步操作相关的附加数据都会传递给这个完成函数（fulfillment function）;第二个是当Promise的状态变为Rejected时要调用的函数，基与完成时调用 的函数类似，所有与失败状态相关的附加数据都会这个拒绝函数（Rejection Function）。Promise还有一个Catch方法，相当于传入拒绝处理程序的Then()方法。
> 每次调用then()方法或者Catch()方法都会创建一个新任务，当Promise被解决（Resolved）时执行。

##### 2. 创建未完成的Promise

> //Nodejs示例
	
	let fs = require('fs');

	function readFile(filename){
	    return new Promise(function(resolve,reject){
	        //触发异步操作
	        fs.readFile(filename,{encoding:"utf8"},function(err , content){
	            //检查是否有错误
	            if(err){
	                reject(err);
	                return;
	            }
	
	            //成功读取文件
	            resolve(content);
	
	        })
	    })
	}
	
	let promise = readFile("src/es6_learning/promise/example.txt");
	
	promise.then(function(contents){
	    //完成
	    console.log(contents);
	
	},function(err){
	    //拒绝
	    console.log(err.message);
	});
	

##### 3. 全局的Promise拒绝处理程序

如果在没有拒绝处理程序的情况下拒绝一个Promise，那么不会提示失败信息。但是在Nodejs中的Process与浏览器的Window对象中会触发两个事件：

> unhandledRejection 在一个事件循环中，当Promise被拒绝，并且没有提供拒绝处理程序时被调用。
	
> rejectionHandled 在一个事件循环后，当Promise被拒绝，并且没有提供拒绝处理程序时被调用。

##### 4. Promise.all()

所有传入Promise.all()方法的Promise只要有一个被拒绝，那么返回的Promise没等所有Promise都完成就立即被拒绝。
	
	let p1 = new Promise(function(resolve,reject){
	    resolve(1);
	})
	let p2 = new Promise(function(resolve,reject){
	    reject(2);
	})
	let p3 = new Promise(function(resolve,reject){
	    resolve(3);
	})
	
	let p4 = Promise.all([p1,p2,p3]);
	
	p4.catch(function(value){
	    console.log(Array.isArray(value));//false
	    console.log(value);//2
	})

> 拒绝处理程序总是接受一个值，而非数组。



##### 5. Promise.race()

Promise.race接受含多个受监视Promise的可迭代对象作为唯一参数并返回一个Promise，但只要有一个Promise被解决返回的Promise就被解决，无需等到所有Promise都被完成。


	let p1 = new Promise(function(resolve,reject){
	    resolve(1);
	})
	
	let p2 = Promise.reject(2);
	
	let p3 = new Promise(function(resolve,reject){
	    resolve(3);
	})
	
	let p4 = Promise.race([p2]);
	
	p4.catch(function(value){
	    console.log(value); //2
	})


##### 6. async & await

1. async 返回值是Promise对象，await 命令就是内部then命令的语法糖。
2. async 函数必须等到内部所有await 命令后面的Promise对象执行完才会发生状态改变，除非遇到Return语句或者抛出错误。


> 发生错误也不要中断后面的异步操作：


	async function f() {
	    try{
	        await Promise.reject('出错了')
	    }catch(e){

	    }
	    return await Promise.resolve('hello, is me');
	}
	
	f().then(v=>console.log(v)) //hello, is me




[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

[UNDERSTANDING ES6 英文原版](https://leanpub.com/understandinges6/read)
