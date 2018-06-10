let fs = require('fs');

function readFile(filename){
    return new Promise(function(resolve,reject){
        //触发异步操作
        fs.readFile(filename,{encoding:"utf8"},function(err , content){
            //检查是否有错误
            if(err){
                reject(err);
                return;
            }

            //成功读取文件
            resolve(content);

        })
    })
}

let promise = readFile("src/es6_learning/promise/example.txt");

promise.then(function(contents){
    //完成
    console.log(contents);

},function(err){
    //拒绝
    console.log(err.message);
});