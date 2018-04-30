
import Rectangle from './class_super';

export default class Square extends Rectangle{
    constructor(length){
        console.log(new.target.name);
        super(length,length);
    }

    // 覆写方法
    getArea(){
        return `覆写后的面积是： ${ this.length * this.length}`;
    }

}