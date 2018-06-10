async function f() {
    try{
        await Promise.reject('出错了')
    }catch(e){

    }
    return await Promise.resolve('hello, is me');
}

f().then(v=>console.log(v))