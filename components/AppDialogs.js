import React from 'react';

const AppDialogs = React.createClass({
    getInitialState(){
        return this.props.store.getState();
    },
    componentWillMount(){
        this.props.store.setDialogs(this.props.dialogs);
        this.props.store.addChangeListener(this._refresh);
    },
    _refresh(){
        this.setState(this.props.store.getState());
    },
    render(){
        return this.state.dialog
    }
});

export default AppDialogs;