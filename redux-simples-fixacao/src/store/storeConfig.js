import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  app: userReducer,
})

function storeConfig() {
  return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig
