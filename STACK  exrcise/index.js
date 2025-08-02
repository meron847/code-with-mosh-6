//we want to creat an object called stack and it has count property with no object and in prototype we have constructur :class stack,peek:f peek(),poo: f pop(),fget count : f count () and if an array is empty throw an error .
const _items=new WeakMap();

class Stack{
    constructor(){
        _items.set(this, []);
    }
    push(obj){
        _items.get(this).push(obj);
    }

    pop(obj){
           const items = _items.get(this);

        if(_items.length === 0)
            throw new Error('Stack is empty.')

        return _items.pop();
    }

    peek(){
        const items= _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.')

        return items[items.length-1];
    }
    get count(){
        return_item.get(this).length;
    }
}
