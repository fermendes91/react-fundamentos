import { ADD_USER, SELECT_USER } from './constants'

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  }
}
