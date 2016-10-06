const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

class EE {
    constructor(){
        this.emitter = new EventEmitter();
    }
    emitChange() {
        this.emitter.emit(CHANGE_EVENT);
    }
    addChangeListener (callback) {
        this.emitter.on(CHANGE_EVENT, callback);
    }
    removeChangeListener (callback) {
        this.emitter.removeListener(CHANGE_EVENT, callback);
    }
}

export default EE;