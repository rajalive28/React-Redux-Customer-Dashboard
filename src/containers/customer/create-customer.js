import React, { Component } from 'react'
import { Form,Popup, Button, Modal,Message } from 'semantic-ui-react';
import './create-customer.css';
import {validateCustomer} from '../../shared/validate-field';
import {addCustomer} from '../../actions/action-creators';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class AddCustomer extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
        email:'',
        gender:'',
        errors:{}
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
   handleClick(){
     if(this.isValid()){
       let payload={
         name:this.state.name,
         email:this.state.email,
         gender:this.state.gender
       }

        this.props.addCustomer(payload);
        this.close();
        this.setState({
          name:'',
          email:'',
          gender:'',
          country:'',
          region:'',
          errors:{}
        })
     }else{
        console.log('====================================');
        console.log("Pass the required parameters");
        console.log('====================================');

     }
  }

  isValid(){
    const{errors,isValid}=validateCustomer(this.state);
      if(!isValid){
        this.setState({errors})
      }
      return isValid;
  }

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  selectCountry (val) {
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }

  render() {
 
    const { open, dimmer } = this.state
    const { name,email, gender,country,region } = this.state
    return (
      <div>

        <Popup trigger={<Button primary icon='user'content='Add User' onClick={this.show('inverted')}></Button>}>
          <Popup.Header>Add User</Popup.Header>
          <Popup.Content>
             Add User
          </Popup.Content>
        </Popup>

        <Modal size="large" dimmer={dimmer} open={open} onClose={this.close} className="heightModal">
          <Modal.Header>Create Customer</Modal.Header>
            <div className="paddingTop">
            <Form id="editForm" onSubmit={this.handleClick.bind(this)} >
      < Form.Input  label='Name' placeholder='Name'  name='name' value={name}   onChange={this.handleChange} required/>
      <Form.Input label='Email' placeholder='youarewow@gmail.com' name='email' type='email' value={email}   onChange={this.handleChange}  required/>
      <Form.Input label='Gender' placeholder='M or F' name='gender' value={gender}  onChange={this.handleChange} error={this.state.errors.gender} required/>
      <Form.Field>
      <Message
      warning={!this.state.errors.gender}
      header='Could you check something!'
      list={[
        'Gender must be M or F only.',
      ]}
    />
      <label>Country</label>
      <CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} />
     </Form.Field>
     <Form.Field>
     <label>State</label>
        <RegionDropdown
          country={country} value={region} onChange={(val) => this.selectRegion(val)}/>
    </Form.Field>
      
      <Button color='teal' >Add Customer</Button>
    </Form>
            </div>
            
        </Modal>
      </div>
    )
  }
}

 
function  matchDispatchToProps(dispatch){
  return bindActionCreators({addCustomer:addCustomer},dispatch);
}


export default withRouter(connect(null,matchDispatchToProps)(AddCustomer));
