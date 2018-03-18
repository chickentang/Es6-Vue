

class ChapterOne {
    
    testLetAndConst(){
        let RegExp = "hello !";
        console.log(RegExp);
        console.log(window.RegExp)
        console.log(window.RegExp === RegExp);

        const ncz = "Hi !";
        console.log(ncz);
        console.log("ncz" in window);
        window.RegExp = "test this is ?";
        console.log(window.RegExp)
    }
    /**
     * For循环的特殊之处,
     * 
    */
    testForLoop() {
        for (let i = 0; i < 3; i++) {
            let i = 'static string';
            console.log(i);//这里的I一直是'static string'
        }
    }

    constantize(obj) {//彻底冻结函数
        Object.freeze(obj);
        Object.keys(obj).forEach((key, i) => {
            if (typeof obj[key] === 'object') {
                constantize(obj[key]);
            }
        })
        obj.name = 777;//TypeError: Cannot add property name, object is not extensible
    }

}

export default new ChapterOne();