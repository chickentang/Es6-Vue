class TestProxy{
    constructor(){
        this.proxy = new Proxy({},{
            get: (target,property) => {
                return 2;
            }
        })
    }
}

let tp = new TestProxy();

console.log(tp.proxy.time + " this is time");// this is time
console.log(tp.proxy.name + " this is time name");// this is time name
console.log(tp.proxy.anything + " this is time anything");// this is time anything