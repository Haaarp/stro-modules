import EventEmitter from './EventEmitter';

class EventEmitterContainer extends EventEmitter{
    constructor(){
        super();
        this._onChange = null;
        this.currentIndex = -1;
        this.currentStoreKey = -1;
        this.currentStoreValid = false;
        this.currentStore = null;
        this.keys = [];
        this.stores = [];
    }
    addStore(i, value){
        value.key = i;
        this.keys.push(i);
        this.stores[value.key] = value;
    }
    getStoreByKey(key){
        return this.stores[key];
    }
    onChange(callback){
        this._onChange = callback;
    }
    setStoreIndex(index){
        var store = this.getStoreByKey(this.keys[index]);
        this.currentIndex = index;
        this.unsubscribeStore(this.currentStore);
        this.subscribeStore(store);
    }
    subscribeStore(store)
    {
        if (store) {
            store.addChangeListener(this.onChildStoreChange.bind(this));
            this.onStoreChange(store);
        }
    }
    unsubscribeStore(store)
    {
        if(store) {
            store.removeChangeListener(this.onChildStoreChange.bind(this));
        }
    }
    onChildStoreChange()
    {
        this.onStoreChange(this.currentStore);
    }
    onStoreChange(store) {
        if (store) {
            this.currentStore = store;
            this.currentStoreKey = store.getKey();
            this.currentStoreValid = store.getValid();
            this._onChange(this.getState());
        }
    }
    getState(){
        return null;
    }
};

export default EventEmitterContainer;