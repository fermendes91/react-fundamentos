import React from 'react'

export default props => {
    const cb = props.quandoClicar
    
    const max = 80;
    const min = 17;

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => {cb('Fernando', gerarIdade(), gerarNerd())}}>Fornecer Informações</button>
        </div>
    )
}