import React, {Component} from 'react';
import './App.css';
import Registration from '../../containers/register/registration'
import {Container, Header, Icon,Segment} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container >
          <Segment color='yellow'>
          <Header as='h2' icon>
            <Icon name='settings'/>
            Registration
            <Header.Subheader>
              Manage your customer settings and be an admin .
            </Header.Subheader>
          </Header>
          <Registration/>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
