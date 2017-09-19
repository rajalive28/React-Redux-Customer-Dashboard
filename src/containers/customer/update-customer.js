import React, { Component } from 'react'
import { Form,Popup, Button, Modal,Message } from 'semantic-ui-react';
import './update-customer.css';
import {validateCustomer} from '../../shared/validate-field';
import {updateCustomer} from '../../actions/action-creators';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'

class UpdateCustomer extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
        email:'',
        gender:'',
        errors:{
          gender:false
        }
    }
  }
  componentWillMount(){
      let customer=this.props.customers.filter((customer)=>{
              return(customer.id===this.props.custid)
      })
      this.setState({
        name:customer[0].name,
        email:customer[0].email,
        gender:customer[0].gender
      })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
   handleClick(){
     if(this.isValid()){
       let payload={
         name:this.state.name,
         email:this.state.email,
         gender:this.state.gender,
         id:this.props.custid
       }

        this.props.setCustomer(payload);
        this.close();
        this.setState({
          errors:{
            gender:false
          }
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
  

  render() {
 
    const { open, dimmer } = this.state
    const { name,email, gender } = this.state
    return (
      <div>

        <Popup trigger={<Button icon="edit" content="Edit"onClick={this.show('inverted')}></Button>}>
          <Popup.Header>Update Details</Popup.Header>
          <Popup.Content>
             Update  Customer List
          </Popup.Content>
        </Popup>

        <Modal size="large" dimmer={dimmer} open={open} onClose={this.close} className="heightModal">
          <Modal.Header>Update Details</Modal.Header>
            <div className="paddingTop">
            <Form id="editForm" onSubmit={this.handleClick.bind(this)} >
      < Form.Input  label='Name' placeholder='Name'  name='name' value={name}   onChange={this.handleChange}  required/>
      <Form.Input label='Email' placeholder='youarewow@gmail.com' name='email' value={email}   onChange={this.handleChange} required/>
      <Form.Input label='Gender' placeholder='M or F' name='gender' value={gender}  onChange={this.handleChange} error={this.state.errors.gender} required/>
      <Message
      warning={!this.state.errors.gender}
      header='Could you check something!'
      list={[
        'Gender must be M or F only.',
      ]}
    />
      <Button color='teal' >Update</Button>
    </Form>
            </div>
            
        </Modal>
      </div>
    )
  }
}

 
function  matchDispatchToProps(dispatch){
  return bindActionCreators({setCustomer:updateCustomer},dispatch);
}


function mapStateToProps(state) {
  return {
      customers: state.customers.items
  };
}


export default withRouter(connect(mapStateToProps,matchDispatchToProps)(UpdateCustomer));
