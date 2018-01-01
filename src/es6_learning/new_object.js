class NewObject{
    testObjectIs(){
        return `Object.is 下 12 和 '12' 是否相等：${Object.is(12,'12')}`;
    }
}
export default new NewObject(); 