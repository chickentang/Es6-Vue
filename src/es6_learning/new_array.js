class NewArray{
    testNewArray(){
        let tobj = {a:1,b:2};
        let arr = ['uou',3,'test','@you']
        return Array.from(arr).toString();
    }

    translate() {
        return Array.from(arguments, (value) => value + 1);
    }

    newFuns(){
        // return Array.of(3,11,8);
        console.log(Array.of(undefined));
        console.log(Array(3).toString());
        // return Array.of(undefined); // null
        return Array(3);
    }

    testCopyWithin(){
        // return [1,2,3,4,5].copyWithin(0,3,4); //[ 4, 2, 3, 4, 5 ]
        // -2相当于3号位，-1相当于4号位
        return [1,2,3,4,5].copyWithin(0,-2,-1); //[ 4, 2, 3, 4, 5 ]
    }

    testFind(){
        return [1,2,3,4,5].find((value,index,arr)=>{
            return value > 2;
        })
    }

    testFindIndex(){
        return [1,2,3,4,5].findIndex((value,index,arr)=>{
            return value > 6;
        })
    }

    testFill(){
        console.log(['a','b','c'].fill(8,1,2))
        return new Array(3).fill(8);
    }

    testIncludes(){
        return [1,2,NaN].includes(NaN); // true
    }

    testEntries(){
        for(let [key,value] of ['a','b','c'].entries()){
            console.log(key,value);
        }
        let letter = ['a','b','c'];
        //手动调用遍历器对象的Next方法进行遍历
        let entries = letter.entries();
        console.log(entries.next().value);
        console.log(entries.next().value);
        console.log(entries.next().value);
    }

}
export default new NewArray();