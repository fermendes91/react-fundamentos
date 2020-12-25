import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {

    // o useState retorna um array de 2 posições, sendo a primeira posição o valor de fato, e a segunda a função que alterará o valor deste state.

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // nome, idade, nerd
    function fornecerInformacoes(nome, idade, nerd) {

        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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