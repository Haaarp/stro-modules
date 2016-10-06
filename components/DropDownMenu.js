import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const DropDownMenu = React.createClass({
    getInitialState(){
        return{
            index:this.props.index
        }
    },
    _onMouseOut(){
        if (this.props.onMouseOut) {
            this.props.onMouseOut();
        }
    },
    _onItemOver(index){
        if (this.props.onItemOver) {
            this.props.onItemOver(index);
        }
    },
    _onSelect(index){
        this.setState({
            index:index
        });
        if (this.props.onChange) {
            this.props.onChange(index);
        }
    },
    getTitle() {
        return this.state.index > -1 ? this.props.items[this.state.index] : this.props.title
    },
    render(){
        return(    
            <DropdownButton onBlur={this._onMouseOut} onSelect={this._onSelect} role='menuitem' title={this.getTitle()} id="select-trackverts" block>
                {this.props.items.map((item, i) => {
                    return <MenuItem onBlur={this._onMouseOut} onMouseOver={() => { this._onItemOver(i)}} key={i} eventKey={i}>{item}</MenuItem>
                })}
            </DropdownButton>
        )
    }
})
export default DropDownMenu;