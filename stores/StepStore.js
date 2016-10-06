import StoreBase from './StoreBase';

class StepStore extends StoreBase {
    constructor(){
        super();
        this.children = null;
        this.parent = null;
    }
    addChild(child){
        child.parent = this;
        if (this.children == null) {
            this.children = [];
        }
        this.children.push(child);
        console.log('this.children',this.children);
    }
    getValid(){
        return false;
    }
}

export default StepStore;