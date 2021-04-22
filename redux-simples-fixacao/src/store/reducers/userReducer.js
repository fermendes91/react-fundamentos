import { ADD_USER, SELECT_USER } from '../actions/constants'

const initialState = {
  selectedUser: {},
  users: [{ cpf: '123', name: 'Fernando', phone: '321' }],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
