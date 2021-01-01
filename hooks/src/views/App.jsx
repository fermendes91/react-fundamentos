import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'

const App = props => {

    const [state, setState] = useState(data)

    // Podemos ter tantos providers quisermos na aplicação
    return (
        <Store>
            { /* Desta forma estamos deixando possivel que algo na aplicação possa mudar totalmente o state, 
                o ideal seria estar encapsulado para que somente o atributo necessario seja alterado (exemplo no Store.jsx )
            */ }
            <DataContext.Provider value={{state, setState}} > { /* Desta forma estamos disponibilizando todo o data para toda a aplicação */}
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App