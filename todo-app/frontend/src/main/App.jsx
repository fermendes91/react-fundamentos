import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react';

import Menu from '../template/Menu'
import Routes from './Routes';

const App = () => (
    <div className="container" >
        <Menu />
        <Routes />
    </div>
)

export default App;
