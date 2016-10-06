import StoreBase from './StoreBase';
import DialogStateBase from './../states/DialogStateBase';

class DialogStoreBase extends StoreBase {
    constructor(args){
        super(args);
        this.state.open = true;
    }
    generateState(){
        return new DialogStateBase();
    }
    show(){
        this.state.open = true;
        this.emitChange();
    }
    close(){
        this.state.open = false;
        this.emitChange();
    }
}

export default DialogStoreBase;