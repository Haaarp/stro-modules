import StateBase from './StateBase';

class DialogStateBase extends StateBase {
    constructor(){
        super();
        this.open = true;
    }
}

export default DialogStateBase;