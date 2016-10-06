import React from 'react';
import StoreBase from './StoreBase';

class DialogListStoreBase extends StoreBase {
    constructor(){
        super();
        this.data = new Object();
        this.key = null;
    }
    show(key) {
        if(this.key != key)
        {
            if (this.key != null) {
                this.hide();  
            }
            this.key = key;
            this.emitChange();
        }
    }
    hide(key) {
        if (key === null || key === undefined || key == this.key){
            this.key == null;
        }
        this.refresh();
    }
    refresh(){
        this.key = null;
        this.emitChange();
    }
    setDialogs(data) {
        this.data = null;
        this.data = data;
    }
    addDialog(key,value) {
        this.data[key] = value;
    }
    getDialog(key){
        return this.data[key];
    }
    getCurrentDialog() {
        if (this.key == null) {
            return null;
        }
        return this.data[this.key];
    }
}

class DialogListStoreTimeoutBase extends DialogListStoreBase {
    constructor(){
        super();
        this.timeOut = null;
    }
    hide(key) {
        if (this.key != null && this.key == key) {
            this.timeOut = setTimeout(this.refresh.bind(this), 500);
        }
        else { 
            super.hide();
        }
    }
    refresh(){
        clearTimeout(this.timeOut);
        this.timeOut = null;
        super.refresh();
    }
}

export default DialogListStoreBase;

export {DialogListStoreTimeoutBase};