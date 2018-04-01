class SetAndMap {
    testSet() {
        let set = new Set();
        set.add(5);
        set.add('5');
        console.log(set.has(5)); // true
        set.delete(5);
        console.log(set.has(5)); // false
        console.log(set.size); // 1
        set.clear();
        console.log(set.has('5')); // false
        console.log(set.size); // 0
    }

    testArrayUniq() {
        let set = new Set([1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5]);
        let arr = [...set];
        console.log(arr); //[ 1, 2, 3, 4, 5 ]
        return arr; //[ 1, 2, 3, 4, 5 ]
    }

    changeSet() {
        let set = new Set([1, 2, 3]);
        //方法二
        set = new Set([...set].map((val) => val * 2));

        //方法二
        set = new Set(Array.from(set, val => val * 2));
        return set; // [ 4, 8, 12 ]
    }
    testMap() {
        const m = new Map();
        const o = { p: 'hello uct' };

        m.set(o, 'content');
        m.set(o, 'new content')
        console.log(m.get(o)); // new content
        console.log(m.has(o)); // true
        m.delete(o);
        console.log(m.has(o)); // false
    }

    strMapToObj(strMap){//Map to Object 
        let obj = Object.create(null);
        for(let [k,v] of strMap){
            obj[k] = v;
        }
        return obj;
    }

    objToStrMap(obj){// Object to Map
        let strMap = new Map();
        for(let k of Object.keys(obj)){
            strMap.set(k,obj[k]);
        }
        return strMap;
    }

}

export default new SetAndMap()
