class Deconstruction{
    testDst(){
        let node = {
            type : "identifier",
            name : "tang"
        },
        type = "Literal",
        name = "lina";
        
        //解构出来的参数会覆盖后面定义的参数值
        ({type , name } = node);

        console.log(type);
        console.log(name);
    }
}

export default new Deconstruction();