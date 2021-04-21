import React, { useState } from 'react'

import './App.css'
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercicio React - Sem Redux</h1>
      <div className="linha">
        <Intervalo
          minimo={min}
          maximo={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        ></Intervalo>
      </div>
      <div className="linha">
        <Media minimo={min} maximo={max}></Media>
        <Soma minimo={min} maximo={max}></Soma>
        <Sorteio minimo={min} maximo={max}></Sorteio>
      </div>
      <div></div>
    </div>
  )
}

export default App
