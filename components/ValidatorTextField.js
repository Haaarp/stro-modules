import React from 'react';

import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

const ValidatorTextField = React.createClass({
  getInitialState() {
    return {
      status:null,
      value:'',
      errorText: '',
    };
  },
  getStatus(){
    if (this.state.status != null) {
      return this.state.status;
    }
  },
  handleChange(e) {
    var errorText = '';
    var status = null;
    var validated = false;
    if (this.props.validate != null) {
      errorText = this.props.validate(e.target.value);
      if (errorText == null) {
        status = 'success';
        validated = true;
      } else {
        status = 'error';
        validated = false;
      }
    } else 
    {
        if (e.target.value.length > 0 && e.target.value.length <= 4) {
          status = 'error';
          errorText = 'Length should be more then 4';
          validated = false;
        } else if (e.target.value.length > 4) {
          status = 'success';
          errorText = null;
          validated = true;
        } else if (e.target.value.length <= 0) {
          status = null;
          validated = false;
          errorText = null;
        }
    }

    this.setState({
      value: e.target.value,
      errorText: errorText,
      status:status
    });

    if (this.props.onChange){
      this.props.onChange(validated, e.target.value);
    }
  },
  _onBlur(e) {
    this.handleChange(e);
  },
  render() {
    return (
      <form>
        <FormGroup
          onBlur={this._onBlur}
          controlId="formValidateText"
          validationState={this.getStatus()}>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.errorText}</HelpBlock>
        </FormGroup>
      </form>
    );
  }
});
export default ValidatorTextField;