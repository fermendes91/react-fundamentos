import React, { useState } from 'react';

const initialState = {
    number: 91,
    text: 'Context API + Hooks (Encapsulado)'
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    const updateState = (key, value) => {
        console.log(key, value)
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        // encapsulando o Context para manter a integridade do estado.
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default Store;
