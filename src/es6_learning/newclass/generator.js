class MyClass{
    *createIterator(){
        yield 1;
        yield 2;
        yield 3;
    }
}

for(let x of new MyClass().createIterator()){
    console.log(x); //1,2,3
}

export default new MyClass();