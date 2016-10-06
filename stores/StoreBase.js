import EventEmitter from './../events/EventEmitter';

class StoreBase extends EventEmitter {
    constructor(){
        super();
        this.state = this.generateState();
    }
    generateState() {
        return null;
    }
    getState(){
        return this.state;
    }
    getParent(){
        return this.parentStore;
    }
}

export default StoreBase;