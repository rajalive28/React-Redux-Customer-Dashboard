import React,{Component} from 'react'
import { Header,Segment,Container} from 'semantic-ui-react'

import CustomerList from '../../containers/customer/customer-list'
import CreateCustomer from '../../containers/customer/create-customer'
import SearchCustomer from '../../containers/customer/search-customer'


export default class Customer extends Component{
  
    render(){
        return(
        <Container >
            <Segment color='yellow' raised>
            <CreateCustomer/>
            </Segment>
            <Segment color='yellow' raised>
            <Header as='h3'>
             User Search
            </Header>
            </Segment>
    <SearchCustomer/>
    <Segment color='yellow' raised>
    <Header as='h3'>
             User Listing
            </Header>
    </Segment>
    <CustomerList/>

    </Container>
        )

    }
}

