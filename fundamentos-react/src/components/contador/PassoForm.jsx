import React from 'react';

const Display = props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput" 
                type="number" 
                value={props.passo} 
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    );
}

export default Display;
