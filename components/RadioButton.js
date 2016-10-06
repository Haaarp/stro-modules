import React from 'react';

import {Radio} from 'react-bootstrap';

const RadioButton = React.createClass({
    componentWillMount() {
        if(this.props.group) {
            this.props.group.add(this);
            this._groupRefresh();
            this.props.group.addChangeListener(this._groupRefresh);
        }
        if (this.props.selected) {
            this._onClick();
        }
    },
    componentWillUnmount() {
        if(this.props.group) {
            this.props.group.remove(this);
            this.props.group.removeChangeListener(this._groupRefresh);
        }
    },
    getInitialState(){
        return {
            active:this.props.selected
        }
    },
    _groupRefresh() {
        var active = this.props.group.getActive() === this;
        this.setState({
            active:active
        })
        if (active && this.props.onChange) {
            this.props.onChange(active);
        }
    },
    _onClick(e, m, i) {
        if(this.props.group) {
            this.props.group.setActive(this);
        }
    },
    render() {
        var viewed = this.props.viewed && this.state.active ? this.props.viewed : null;
        return(   
            <div>
                <Radio onChange={() => {}} checked={this.state.active} onClick={this._onClick}>{this.props.children}</Radio>
                {viewed}
            </div>
        )
    }
})

export default RadioButton;