let x = 10;
class Es6Function{
    constructor() {
        this.value = 5;
    }
    //default params
    testDefaultParams(one , two = one){
        return `${one} 第二个参数是： ${two}`;
    }
    testNewMax(){
        const arr = [6,8,1,4,3,9,77,4250,-5];
        return `用展开运算符来取最大值：${Math.max(...arr)}`;
    }

    testLazy(p = x + 1){
        console.log(p);
    }
    
    thisScope(){
        setTimeout(()=>{
            console.log('id: ',this.id);
        },100);
    }

    testArguments(){
        setTimeout(() => {
            console.log('args: ',arguments)
        }, 100);
    }

    getValue(){
        return this.value ++;
    }

    add(first,second = this.getValue()){
        console.log('plus: ', first + second );
    }

}
 
export default new Es6Function();