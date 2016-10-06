import DialogListStoreBase from './../../modules/stores/DialogListStoreBase';
import StateBase from './../../modules/states/StateBase';

class State extends StateBase {
    constructor(){
        super();
        this.dialog = null;
    }
}

class AppDialogsStore extends DialogListStoreBase {  
    constructor(){
        super();
    }
    generateState(){
        return new State();
    }
    getState(){
        this.state.dialog = this.getCurrentDialog();
        return this.state;
    }
}

export default AppDialogsStore;