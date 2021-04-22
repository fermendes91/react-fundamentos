import { ADD_USER, SELECT_USER } from '../actions/constants'

const initialState = {
  selectedUser: {},
  users: [{ cpf: '123', name: 'Fernando', phone: '321' }],
}

function userReducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case ADD_USER:
      state.users.push(action.payload)
      return {
        ...state,
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
