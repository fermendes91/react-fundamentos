import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// o underline significa que função tem somente 1 parametro, mas que o mesmo nao sera usada dentro deste componente
export default _ =>
    <div>
        <h1>Fundamentos React JS</h1>
        <Aleatorio min={33} max={94} />
        <Fragmento />
        <ComParametro titulo="Titulo Comp" subtitulo="Subtitulo Comp" />
        <ComParametro titulo="Titulo Comp" subtitulo="Subtitulo Comp" aluno="Fernando" nota={9} />
        <Primeiro></Primeiro>
        <strong>Olá React!</strong>
    </div>