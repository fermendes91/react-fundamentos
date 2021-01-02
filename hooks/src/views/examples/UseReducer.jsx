import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// uma forma para se organizar o reducer, o exemplo do reducerInicial é somente para entendermos o funcionamento
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const reducerInicial = (state, action) => {

    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload, idade: 30 } }
        case 'multiplyBy7':
            return { ...state, }
        // Montar um desafio que teremos uma ação de multiplicar por 7, ação para dividir por 25, ação fazer parse para inteiro, ação para adicionar um numero qualquer
        default:
            return state
    }
}

// desafio

const UseReducer = (props) => {

    /* o primeiro atributo do useRducer é a função que será executada e o segundo parametro o estado inicial do componente
       como retorno o state ficara disponivel para uso, junto com uma função dispatch que será executada para que aconteçam
       mudanças no estado caso necessario */
    const [state, dispatch] = useReducer(reducerInicial, initialState)
    const [stateChallenge, dispatchChallenge] = useReducer(reducer, initialState)

    // desafio
    const [n, setN] = useState(1);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                {state.user ?
                    <span className="text">Bem-Vindo(a) {state.user.name}</span>
                    : <span className="text">Sem Usuario</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Thaysa' })}>Login</button>
                </div>
            </div>

            <SectionTitle title="Desafio #01" />
            <div className="center">
                <span className="text">{stateChallenge.challengeNumber}</span>
                <input type="number" className="input" value={n} onChange={(e) => setN(e.target.value)} />
                <div>
                    <button className="btn" onClick={() => dispatchChallenge({ type: 'addBy2' })}>+2</button>
                    <button className="btn" onClick={() => dispatchChallenge({ type: 'multiplyBy7' })}>x7</button>
                    <button className="btn" onClick={() => dispatchChallenge({ type: 'divideBy25' })}>/25</button>
                    <button className="btn" onClick={() => dispatchChallenge({ type: 'parseNumber' })}>Parse</button>
                    {(n > 0 || n < 0) && <button className="btn" onClick={() => dispatchChallenge({ type: 'addByN', payload: n })}>
                        {n >= 0 ? '+' : ''}{n}
                    </button>}
                </div>
            </div>


            <SectionTitle title="Exercicio #03 - Utilizando de forma organizada" />
            <div className="center">
                <div className="center">
                    {state.user ?
                        <span className="text">Exercicio 03 xD -- {state.user.name}</span>
                        : <span className="text">Esperando Usuario...</span>}
                    <span className="text">{state.number}</span>
                    <div>
                        <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                        <button className="btn" onClick={() => login(dispatch, 'Demeterko')}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
