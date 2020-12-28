import React from 'react';
import {
    Switch, Route
} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import Param from '../../views/examples/Param';

import './Content.css'

const Content = props => (
    <main className="Content">
        <Switch>
            {/* exact -> Só entra no ABOUT se for exatamente /about */ } 
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param /> {/* Rota com parametro */}
            </Route>
            { /* Melhor deixar o HOME sem o exact, pois caso nao seja encontrada
                 uma URL, então sera redirecionado para o Inicio. */}
            <Route exact path="/"> 
                <Home />
            </Route>
            { /* Qualquer outra URl que não for atendida caira no "*" */}
            <Route path="*"> 
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content;
