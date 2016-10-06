import React,{StyleSheet} from 'react';
import _ from 'lodash';
import {Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

const SelectebleTable = React.createClass({
  selected:[],
  getInitialState(){
      return {
        selectedItems:[],
        actualItems:[]
      }
  },
  _onSelectAllClick(){
    var selected = _.map(this.props.data, (item,i) => {return i});
    this.selected = selected;
    this._propsSelectedChanged();
  },
  _onRemoveAllClick(){
    this.selected = [];
    this._propsSelectedChanged();
    this._refreshTable();
  },
  _propsSelectedChanged(){
    if(this.props.onChange) {
      this.props.onChange(this.selected);
    }
    this._refreshTable();
  },
  componentWillMount(){
    if(!this.props.data){
      return;
    }
    this.selected = this.props.selected;
    this._refreshTable();
  },
  _refreshTable(){
    var selectedItems = [];
    var actualItems = [];

    for(var i = 0; i < this.props.data.length; i++) {
      if (this.selected.indexOf(i) > -1) {
        selectedItems.push([i,this.props.data[i]]);
      } else {
        actualItems.push([i,this.props.data[i]]);
      }
    }

    this.setState({
      selectedItems:selectedItems,
      actualItems:actualItems
    })
  },
  _onSelectItem(index){
    var itemIndex = this.selected.indexOf(index);
    if(itemIndex == -1) {
      this.selected.push(index);
    } else {
      this.selected.splice(itemIndex, 1);
    }
    this._propsSelectedChanged()
  },
  renderItem(data, i){
    var itemData = _.merge(data[1], {
      onSelect:() => {
        this._onSelectItem(data[0]);
      }
    });
    return(<ListGroupItem key={data[0]}>{this.props.renderer(itemData)}</ListGroupItem>)
  },
  render(){

  return(
    <div>
      <Col sm={6}>
        <div>{this.props.titles[0]}</div>
        <Button onClick={this._onSelectAllClick}>Add all</Button>
        <ListGroup>
          {this.state.actualItems.map(this.renderItem)}
        </ListGroup>
      </Col>
      <Col sm={6}>
        <div>{this.props.titles[1]}</div>
        <Button onClick={this._onRemoveAllClick}>Remove all</Button>
        <ListGroup>
          {this.state.selectedItems.map(this.renderItem)}
        </ListGroup>
      </Col>
    </div>
)}
})

export default SelectebleTable;