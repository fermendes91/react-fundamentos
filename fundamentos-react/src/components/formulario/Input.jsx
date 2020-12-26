import React, { useState } from 'react';

import "./Input.css"

const Input = () => {
    
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly style={{backgroundColor: "gray"}}/>
                <input value={undefined} /> {/* componente não esta associado a nenhum estado. ( não é usual ) */ }
            </div>
        </div>
    );
}

export default Input;
