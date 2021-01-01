import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

// A ideia principal do UseContext é a troca de informação entre componentes que estão distantes.
const UseContext = (props) => {

    const {state: contextState, setState: setContextState} = useContext(DataContext)

    const addNumber = (n) => {
        setContextState({
            ...contextState, // restaurando todos os atributos do contexto e modificando somente o number que é a ideia da função
            number: contextState.number + n
        })
    }

    const { number, setNumber, text, setText } = useContext(AppContext)

    useEffect(() => {
        number > 100 ? setText('A numeração passou dos 100') :
            setText('A numeração esta abaixo ou igual a 100') 
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{contextState.text}</span>
                <span className="text">{contextState.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number+1)}>+1</button>
                    <button className="btn" onClick={() => setNumber(number-1)}>-1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
