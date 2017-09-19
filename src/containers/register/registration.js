import React,{ Component } from 'react';
import { Button, Form ,Message} from 'semantic-ui-react';
import {validateRegistration} from '../../shared/validate-field';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import {admin} from '../../actions/action-creators'


export class Registration extends Component{

constructor(){
  super();
  this.state={
      name:'',
      email:'',
      password:'',
      errors:{}
  }
}


  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  

  handleClick(){
     if(this.isValid()){
       let payload={
         name:this.state.name,
         email:this.state.email,
         password:this.state.password
       }
       this.props.setAdmin(payload);
      this.props.history.push("/");
     }else{
        console.log('====================================');
        console.log("Pass the required parameters");
        console.log('====================================');

     }
  }

  isValid(){
    const{errors,isValid}=validateRegistration(this.state);
      if(!isValid){
        this.setState({errors})
      }
      return isValid;
  }

  render(){
    const { name,email, password } = this.state
    return( 
       <Form id="loginForm" onSubmit={  this.handleClick.bind(this)}>
      < Form.Input  label='Name' placeholder='Name'  name='name' value={name}   onChange={this.handleChange} required/>
      <Form.Input label='Email' placeholder='youarewow@gmail.com' name='email' type='email' value={email}   onChange={this.handleChange}  required/>
      <Form.Input label='Enter Password' type='password' name='password' value={password} min='5'  onChange={this.handleChange} error={this.state.errors.password} required/>
      <Message
      warning={!this.state.errors.password}
      header='Could you check something!'
      list={[
        'The Password length must be greater than or equal to 5.',
      ]}
    />
      <Button type='submit' >Submit</Button>
    </Form>
  )
  }

}
 
function  matchDispatchToProps(dispatch){
  return bindActionCreators({setAdmin:admin},dispatch);
}


export default withRouter(connect(null,matchDispatchToProps)(Registration));
