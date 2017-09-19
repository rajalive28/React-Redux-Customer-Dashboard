import React,{Component} from 'react'
import { Header, Icon,Container,Form,Button,Segment,Divider,Message} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {connect } from 'react-redux';

 class Login extends Component{

  constructor(){
    super();
    this.state={
        email:'',
        password:'',
        warning:{},
        errors:{}
    }
  }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleClick(){
      let payload={
        email:this.state.email,
        password:this.state.password
      }

     let getIn= this.props.admins.map((admin)=>{
          if(admin.email===payload.email &&admin.password===payload.password){
            return true;
          }else{
            return  false;
          }     
      });
      if(getIn && getIn.includes(true)){
        this.props.history.push("/customer");
      }else{
        this.setState({
          warning:{
            valid:"NO"
          }
        })
      }
  }
  


    render(){
      const { email, password } = this.state

        return(
            <div>
            <Container>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        Log In to your Account
      </Header.Content>
    </Header>
    <Form id='userForm' onSubmit={this.handleClick.bind(this)}>
    <Form.Input icon='mail' iconPosition='left' placeholder='Email Address' name='email' type='email' value={email} onChange={this.handleChange}  required/>
    <Form.Input icon='privacy' iconPosition='left' placeholder='Password' type="password" name='password' value={password} onChange={this.handleChange}  required/>
    <Button positive >Get In</Button>
    <Message
      warning={!this.state.warning.valid}
      header='Could you check something!'
      list={[
        'That credentials you passed may not be correct.',
      ]}
    />
    </Form>
    <Segment>
            Don't have an account ? <Link to='/register'>Create One</Link>
    <Divider section />
    <Link to='/register'> Go back to home page</Link>
  </Segment>
    </Container>
            </div>
        )

    }
}
function mapStateToProps(state) {
  return {
      admins: state.admin.admins
  };
}
export default withRouter(connect(mapStateToProps)(Login));