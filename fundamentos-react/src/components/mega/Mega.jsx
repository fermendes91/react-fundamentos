import React, { useState } from 'react';

import surpresinhaMega from './surpresinhaMega'

const Mega = (props) => {

    const [numeros, setNumeros] = useState(surpresinhaMega(props.numerosSorteados))

    const generateSurpresinha = _ => {
        setNumeros(surpresinhaMega(props.numerosSorteados))
    }

    return (
        <div>
            <h3>Mega</h3>
            <p>{numeros.map( (num,i) => numeros.length != i+1 ? num + ', ' : num)}</p>
            <button onClick={generateSurpresinha}>Gerar Valores</button>
        </div>
    );
}

export default Mega;
