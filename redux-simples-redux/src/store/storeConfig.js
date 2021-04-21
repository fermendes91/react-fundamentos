import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numerosReducer,
  /*reducer criado de exemplo para entender que sempre que uma action é disparada
    vamos passar por todos os reducers, o switch case acima, serve para referenciarmos 
    o que faremos de acordo com o tipo da action disparado.
  */
  nomes: (state, action) => {
    return ['Fernando', 'Thaysa', 'Mendes', 'Maciel']
  },
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
