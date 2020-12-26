import React from 'react'

import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

import "./App.css"

// o underline significa que função tem somente 1 parametro, mas que o mesmo nao sera usada dentro deste componente
const App = _ =>
    <div className="App">
        <h1>Fundamentos React JS</h1>

        <div className="Cards">

            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={8} />
                <ParOuImpar numero={17} />

                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos />
            </Card>

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

    export default App;