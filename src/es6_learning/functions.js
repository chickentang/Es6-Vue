class Es6Function{
    //default params
    testDefaultParams(one , two = one){
        return `${one} 第二个参数是： ${two}`;
    }
    testNewMax(){
        const arr = [6,8,1,4,3,9,77,4250,-5];
        return `用展开运算符来取最大值：${Math.max(...arr)}`;
    }

}
 
export default new Es6Function();