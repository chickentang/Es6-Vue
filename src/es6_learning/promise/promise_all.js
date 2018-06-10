let p1 = new Promise(function(resolve,reject){
    resolve(1);
})
let p2 = new Promise(function(resolve,reject){
    reject(2);
})
let p3 = new Promise(function(resolve,reject){
    resolve(3);
})

let p4 = Promise.all([p1,p2,p3]);

p4.catch(function(value){
    console.log(Array.isArray(value));//false
    console.log(value);//2
})