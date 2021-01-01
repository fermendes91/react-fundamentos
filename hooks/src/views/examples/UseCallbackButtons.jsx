import React from 'react';

const UseCallbackButtons = props => {
    
    console.log('UseCallbackButtons rendered')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>
        </div>
    );
}

// O componente só será renderizado novamente se houver alterações nas propriedades.
export default React.memo(UseCallbackButtons) // cria componente cacheado
