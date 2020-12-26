import React, { Component } from 'react';

import PassoForm from './PassoForm'
import Botoes from './Botoes'
import Display from "./Display"

import "./Contador.css"

class Contador extends Component {

    /*  FORMA DE ALTERAR O ESTADO UTILIZANDO CONSTRUCTOR  
    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
    } */

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        );
    }
}

export default Contador;
