import React from 'react'

import './App.css'
import ManageUser from './components/ManageUser'
import ListUser from './components/ListUser'

function App() {
  return (
    <div className="App">
      <h1>Exercicio React - Com Redux ( Fixação )</h1>
      <div className="linha">
        <ManageUser></ManageUser>
      </div>
      <div className="linha">
        <ListUser></ListUser>
      </div>
    </div>
  )
}

export default App
