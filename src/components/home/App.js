import React, {Component} from 'react';
import './App.css';
import Registration from '../../containers/register/registration'
import {Container, Header, Icon} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header as='h2' icon>
            <Icon name='settings'/>
            Registration
            <Header.Subheader>
              Manage your customer settings and be an admin .
            </Header.Subheader>
          </Header>
          <Registration/>
        </Container>
      </div>
    );
  }
}

export default App;
