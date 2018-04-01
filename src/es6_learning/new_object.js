class NewObject{
    testObjectIs(){
        console.log(+0 == -0); // true
        console.log(+0 === -0); // true
        console.log(Object.is(+0 , -0)); // false
        console.log(NaN == NaN); // false
        console.log(NaN === NaN); // false
        console.log(Object.is(NaN , NaN)); // true
    }

    testObjectAssign(){
        let target = { a: { b: 'c', d: 'e' } };
        let source = { a: { b: 'hello' } }
        console.log(Object.assign(target, source)); // {a: {b:'hello'}}


        let receiver = {};
        Object.assign(receiver,{
            type:'girl',
            name:'superman',
        },{
            type:'boy',
        })
        return receiver.type + " : " + receiver.name; // boy : superman
    }

    testObjectValues() {
        var obj = Object.create({}, { p: { value: 42 } });
        console.log(Object.values({ [Symbol()]: 123, any: 'abc' })); // ['abc']

        return Object.values(obj);
    }

    testObjectEntries(){
        let obj = { a: 'bar', b: 23 };
        let map = new Map(Object.entries(obj));
        console.log(map.get('a')); // bar
    }

}
export default new NewObject(); 