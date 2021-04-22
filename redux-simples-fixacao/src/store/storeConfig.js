import { createStore, combineReducers } from 'redux'

import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  users: userReducer,
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
