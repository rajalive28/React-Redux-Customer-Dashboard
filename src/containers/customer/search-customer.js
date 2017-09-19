import React,{Component} from 'react'
import { Form,Button,Message} from 'semantic-ui-react'
import {validateCustomer} from '../../shared/validate-field';
import {searchCustomer,resetCustomer} from '../../actions/action-creators';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
export class SearchCustomer extends Component{

    constructor(){
        super();
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
          this.props.searchCustomer(payload);
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

    reset(){
        this.setState({
          name:'',
          email:'',
          gender:'',
          errors:{
            gender:false
          }
        })
        this.props.reset()
      }


        render(){
            const { name,email, gender } = this.state
            return(
            <Form id="searchForm" >
    <Form.Group>
      < Form.Input width={6}  label='Name' placeholder='Name'  name='name' value={name}   onChange={this.handleChange}  required/>
      <Form.Input width={6} label='Email' placeholder='youarewow@gmail.com' name='email' value={email}  type='email' onChange={this.handleChange} required/>
      </Form.Group>
      <Form.Group>
      <Form.Input  width={6}label='Gender' placeholder='M or F' name='gender' value={gender}  onChange={this.handleChange} error={this.state.errors.gender} required/>
      <Message
      warning={!this.state.errors.gender}
      header='Could you check something!'
      list={[
        'Gender must be M or F only.',
      ]}
    />
      </Form.Group>
      <Button color='teal'onClick={this.handleClick.bind(this)} >Search</Button>
      <Button color='teal'onClick={this.reset.bind(this)}>Reset</Button>
    </Form>
            )
        }

}

function  matchDispatchToProps(dispatch){
    return bindActionCreators({searchCustomer:searchCustomer,reset:resetCustomer},dispatch);
  }
  function mapStateToProps(state) {
    return {
        customers: state.customers.items
    };
  }
  export default connect(mapStateToProps,matchDispatchToProps)(SearchCustomer);