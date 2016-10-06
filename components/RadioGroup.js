import EventEmitter from './../events/EventEmitter';

class RadioGroup extends EventEmitter {
    constructor(){
        super();
        this.elements = [];
        this.active = false;
    }
    static createGroup(){
        return new RadioGroup();
    }
    add(el){
        this.elements.push(el);
    }
    remove(el){
        var index = this.elements.indexOf(el);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
    }
    getActive(){
        return this.active;
    }
    setActive(el){
        this.active = el;
        this.emitChange(); 
    }
};

export function createGroup() {
    return new RadioGroup();
}

export default RadioGroup;