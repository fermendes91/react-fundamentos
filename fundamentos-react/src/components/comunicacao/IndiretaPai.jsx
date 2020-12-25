import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {

    let nome = '?'
    let idade = 0
    let nerd = false

    // nome, idade, nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>
                <span>Nome: <strong>{nome}</strong></span>
                <span>Idade: <strong>{idade}</strong></span>
                <span>Nerd: {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}