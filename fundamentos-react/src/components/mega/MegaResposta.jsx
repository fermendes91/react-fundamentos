import React, { useState } from 'react';

import "./Mega.css"

const MegaResposta = props => {

    const gerarNumeros = (qtde) => {
        return Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
    }

    const gerarNumerosNaoContido = (min, max, array) => {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumerosNaoContido(min, max, array) : aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega (Resposta)</h2>
            <h3>{numeros.join(', ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input 
                    type="number" 
                    min="6" 
                    max="15"
                    value={qtde} 
                    onChange={e => {
                       setQtde(+e.target.value)
                       setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    );
}

export default MegaResposta;
