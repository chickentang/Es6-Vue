let p1 = new Promise(function(resolve,reject){
    resolve(1);
})

let p2 = Promise.reject(2);

let p3 = new Promise(function(resolve,reject){
    resolve(3);
})

let p4 = Promise.race([p2]);

p4.catch(function(value){
    console.log(value); //2
})