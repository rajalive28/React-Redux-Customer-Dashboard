import * as types from './constants';

export function admin(payload) {  
    return {
      type: types.ADD_ADMIN,
      payload:{
        name:payload.name,
        email:payload.email,
        password:payload.password
      }
    };
  }

  export function updateCustomer(payload) {  
    return {
      type: types.UPDATE_CUSTOMER,
      payload:{
        name:payload.name,
        email:payload.email,
        gender:payload.gender,
        id:payload.id
      }
    };
  }
  export function deleteCustomer(payload) {  
    return {
      type: types.DELETE_CUSTOMER,
      payload:{
        id:payload
      }
    };
  }
  export function searchCustomer(payload) {  
    return {
      type: types.SEARCH_CUSTOMER,
      payload:{
        name:payload.name,
        email:payload.email,
        gender:payload.gender
      }
    };
  }
  export function resetCustomer(payload) {  
    return {
      type: types.RESET_CUSTOMER,
      payload
    };
  }
  export function addCustomer(payload) {  
    return {
      type: types.ADD_CUSTOMER,
      payload:{
        name:payload.name,
        email:payload.email,
        gender:payload.gender
      }
    };
  }
