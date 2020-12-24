import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'

import "./App.css"

// o underline significa que função tem somente 1 parametro, mas que o mesmo nao sera usada dentro deste componente
export default _ =>
    <div className="App">
        <h1>Fundamentos React JS</h1>

        <div className="Cards">

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Targaryan" >
                    <FamiliaMembro nome="Fernando" />
                    <FamiliaMembro nome="Thaysa" />
                    <FamiliaMembro nome="Sansa" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={1} max={10} /> 
                <Aleatorio min={33} max={66} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro titulo="Titulo Comp" subtitulo="Subtitulo Comp" />
                <ComParametro titulo="Titulo Comp" subtitulo="Subtitulo Comp" aluno="Fernando" nota={9} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
       
        </div>

    </div>