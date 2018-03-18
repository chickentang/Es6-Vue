class TestGenerator {
    static *_fibonacci() {//生成器应用例子
        let [prev, curr] = [0, 1];
        for (; ;) {
            [prev, curr] = [curr, prev + curr];
            yield curr;
        }
    }
    testObjIterator(){//原生对象没有Iterator接口
        let jane = {name:'tang',code:12556};
        for(let [key,value] of jane){
            console.log(`${key}------${value}`)
        }
    }
    *inner(){
        yield 'hello!';
    }
    *outer(){//在一个生成器中调用另一个生成器，用 Yield* 表达式
        yield* this.inner();
        yield 'tang';
    }
    static *clock(){//状态机
        while(true){
            console.log("Tick!");
            yield;
            console.log("Tock!");
            yield;
        }
    }
    *iterEntries(obj){//为{name:'test'}的普通对象添加Iterator接口
        let keys = Object.keys(obj);
        for(let i=0; i<keys.length;i++){
            let key = keys[i];
            yield [key,obj[key]];
        }
    }
    main() {
        /* let arr = [];
        for (let n of TestGenerator._fibonacci()) {
            if (n > 1000) break;
            arr.push(n);
        }
        return arr.toString(); */
        /* let arr = [];
        for (let n of TestGenerator.outer()) {
            arr.push(n);
        }
        return arr.toString(); */
        /* for(let n of TestGenerator.clock()){
            //todo
        } */
    }
}
export default new TestGenerator();