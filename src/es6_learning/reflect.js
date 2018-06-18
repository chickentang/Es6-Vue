class TestReflect{
    constructor(){
        let obj = Object.create(null);

        obj.name = "test name";

        obj.anything = "anything";

        this.loggedObj = new Proxy(obj,{
            get: (target,name) =>{
                console.log('get',target,name);
                return Reflect.get(target,name);//获取默认行为
            },
            deleteProperty(target,name){
                console.log('delete' + name);
                return Reflect.deleteProperty(target,name);//获取默认行为
            },
            has(target,name){
                console.log('has' + name);
                return Reflect.has(target,name);//获取默认行为
            }
        })
    }
}

let tr = new TestReflect();



console.log( `reflect name : ` + tr.loggedObj.name);