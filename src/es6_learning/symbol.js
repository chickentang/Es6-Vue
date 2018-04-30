class TestSymbol{
    readProperty(){
        let mySymbol = Symbol();
        let mySymbol2 = Symbol();
        let a = {};
        a[mySymbol]  =  'Hello';//唯一属性
        let b = {
            [mySymbol2]:'nihao',//唯一属性
        }
    }

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

    testInnerSymbol(){
        let arr1 = ['c','d'];
        console.log(['a','b'].concat(arr1,'e')); // ["a", "b", "c", "d", "e"]

        let arr2 = ['c','d'];
        arr2[Symbol.isConcatSpreadable] = false;
        console.log(['a','b'].concat(arr2,'e')); // ["a", "b", Array(2), "e"]

    }
}

export default new TestSymbol();