import * as types from '../actions/constants';
import {UUID} from '../shared/uuid-generator';
const initialState = {
    searchText: {
        name: '',
        email: '',
        gender: ''
    },
    items: [
        {
            id:UUID(),
            name: "Bucky",
            email: "Roberts@Bucky",
            gender: 'M'
        }, {
            id:UUID(),
            name: "Steve",
            email: "Steve@Rogers",
            gender: 'M'
        }, {
            id: UUID(),
            name: "Marshall",
            email: "Eminem@Marshall",
            gender: 'M'
        }
    ]
};

export default function customer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_CUSTOMER:
            return {
                searchText: {
                    name: '',
                    email: '',
                    gender: ''
                },
                items: state
                    .items
                    .map((customer) => {
                        if (customer.id === action.payload.id) {
                            return action.payload
                        } else {
                            return customer
                        }
                    })
            };
        case types.DELETE_CUSTOMER:
            return {
                searchText: {
                    name: '',
                    email: '',
                    gender: ''
                },
                items: state
                    .items
                    .filter((customer) => customer.id !== action.payload.id)
            }
        case types.SEARCH_CUSTOMER:
            return {
                searchText: {
                    name: action.payload.name,
                    email: action.payload.email,
                    gender: action.payload.gender
                },
                items: state.items
            }

        case types.ADD_CUSTOMER:
            action.payload.id = UUID()
            return {
                searchText: {
                    name: '',
                    email: '',
                    gender: ''
                },
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case types.RESET_CUSTOMER:
            return {
                searchText: {
                    name: '',
                    email: '',
                    gender: ''
                },
                items: state.items
            }
        default:
            return state;
    }
}