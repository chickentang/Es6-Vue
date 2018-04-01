const _counter = new WeakMap();
const _action = new WeakMap();
//weakmap的私有属性
class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        counter--;
        console.log(counter);
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}

export default Countdown;