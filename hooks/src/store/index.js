import reducer from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0, // foco será somente neste atributo
    challengeNumber: 0
}

export {
    initialState,
    reducer
}