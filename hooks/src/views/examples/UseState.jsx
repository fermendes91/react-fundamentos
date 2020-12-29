import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// possibilidade criar estado dentro de um componente funcional ( useState )
const UseState = (props) => {

    // useState => retorna um array de 2 posições, a primeira com o valor inicial, e a segunda com o metodo de alteracao da variavel
    const [count, setCount] = useState(0) 
    const [name, setName] = useState('Inicial...')

    return ( 
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="#Exercicio 01- Componente não controlado" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount((current) => current - 100)}>-100</button>
                    <button className="btn" onClick={() => setCount(count-1)}>-1</button>
                    <button className="btn" onClick={() => setCount(0)}>0</button>
                    <button className="btn" onClick={() => setCount(count+1)}>+1</button>
                    <button className="btn" onClick={() => setCount((current) => current + 100)}>+100</button>
                </div>
            </div>
            
            <SectionTitle title="#Exercicio 02 - Componente controlado (input) " />
            <input type="text" className="input" value={name} onChange={(e => setName(e.target.value) )} />
            <span>{name}</span>
        </div>
    )
}

export default UseState
