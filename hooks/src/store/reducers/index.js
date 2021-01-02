const reducer = (state, action) => {
    switch (action.type) {
        case 'addBy2':
            return { ...state, challengeNumber: state.challengeNumber + 2 }
        case 'multiplyBy7':
            return { ...state, challengeNumber: state.challengeNumber * 7 }
        case 'divideBy25':
            return { ...state, challengeNumber: state.challengeNumber / 25 }
        case 'parseNumber':
            return { ...state, challengeNumber: parseInt(state.challengeNumber) }
        case 'addByN':
            if (!action.payload) return state
            return { ...state, challengeNumber: state.challengeNumber + (+action.payload)}
        // Montar um desafio que teremos uma ação de multiplicar por 7, ação para dividir por 25, ação fazer parse para inteiro, ação para adicionar um numero qualquer
        default:
            return state
    }
}

export default reducer