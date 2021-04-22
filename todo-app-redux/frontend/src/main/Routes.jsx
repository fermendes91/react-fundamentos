import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/Todo'
import About from '../about/About'

// quando nao atender nenhuma url, redireciona para todos (Redirect)
export default props => (
    
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos" />
    </Router>
)
