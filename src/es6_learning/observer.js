class TestObserve{//Proxy和Reflect实现观察者模式
    constructor(){
        this.queuedObservers = new Set();
        
        this.set = (target,key,value,receiver) => {
            const result = Reflect.set(target,key,value,receiver);
            this.queuedObservers.forEach(observer => observer());
            return result;
        }
        
        

    }
    observe = fn => this.queuedObservers.add(fn);
    observable = obj => new Proxy(obj,{set:this.set});
    print(){
        console.log(`${person.name} , ${person.age}`);
    }
}

let to = new TestObserve();

const person = to.observable({name:'张三',age:20});

to.observe(to.print);

person.name = "pp";

//pp , 20