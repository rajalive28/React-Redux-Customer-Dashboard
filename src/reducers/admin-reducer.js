import * as types from '../actions/constants';
const initialState = {
  admins: [
    {
      id: 1,
      name: 'admin',
      password: 'admin',
      email: 'admin@admin'
    }
  ]
};
export default function admins(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ADMIN:
      action.payload.id = state.admins.length + 1
      return {
        admins: [
          ...state.admins,
          action.payload
        ]
      }
    default:
      return state;
  }
}