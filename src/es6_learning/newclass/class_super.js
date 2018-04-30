export default class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }

    getArea(){
        return this.length * this.width;
    }

    //静态方法
    static getPerimeter(length,width){
        return ( length + width) * 2;
    }
}
