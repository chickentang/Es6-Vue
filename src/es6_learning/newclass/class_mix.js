let SerializableMixin = {
    serialize(){
        return JSON.stringify(this);
    }
}

let AreaMixin = {
    getArea(){
        return this.length * this.width;
    }
}

function mixin(...mixins){
    var base = function(){}
    Object.assign(base.prototype, ...mixins);
    return base;
}

//混合模式，利用函数的继承
export default class Square extends mixin(AreaMixin,SerializableMixin){
    constructor(length){
        super();
        this.length = length;
        this.width = length;
    }
}