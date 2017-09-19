import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import EditCustomer from './update-customer';
import {deleteCustomer} from '../../actions/action-creators';
import {bindActionCreators} from 'redux'

class CustomerList extends Component {

  deleteCustomer(id) {
    this
      .props
      .deleteCustomer(id);
  }

  render() {

    return (
      <Table color='yellow'  celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Rows
          customers={this.props.customers}
          deleteCustomer={this
          .deleteCustomer
          .bind(this)}/>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state
      .customers
      .items
      .filter((item) => (item.name.startsWith(state.customers.searchText.name) && item.email.startsWith(state.customers.searchText.email) && item.gender.startsWith(state.customers.searchText.gender)))
  };
}

class Rows extends Component {
  deleteCustomer(id) {
    this
      .props
      .deleteCustomer(id);
  }

  render() {
    return (
      <Table.Body>
        {this
          .props
          .customers
          .map((customer) => {
            return (
              <Table.Row key={customer.id}>
                <Table.Cell >{customer.name}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell>{customer.gender}</Table.Cell>
                <Table.Cell><EditCustomer custid={customer.id}/></Table.Cell>
                <Table.Cell>
                  <Button
                    icon='user delete'
                    onClick={this
                    .deleteCustomer
                    .bind(this, customer.id)}
                    content='Remove'></Button>
                </Table.Cell>
              </Table.Row>
            )
          })}</Table.Body>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCustomer: deleteCustomer
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CustomerList);
