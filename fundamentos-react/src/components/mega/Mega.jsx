import React, { useState } from 'react';

import surpresinhaMega from './surpresinhaMega'

const Mega = (props) => {

    const [qtde, setQtde] = useState(props.qtdeNumeros || 6)
    const [numeros, setNumeros] = useState(surpresinhaMega(qtde))

    const generateSurpresinha = _ => {
        setNumeros(surpresinhaMega(qtde))
    }

    return (
        <div className="Mega">
            <h3>Mega</h3>
            {numeros.length
                ? <p>{numeros.map( (num,i) => numeros.length !== i+1 ? num + ', ' : num)}</p> 
                : <p>O número minimo para geração é de 6</p>}
            <div>
                <label>Qtde Números a serem gerados</label>
                <input type="number" value={qtde} onChange={e=> {
                    if (+e.target.value > 60) {
                        e.target.value = 60
                    }
                    setQtde(+e.target.value)
                    setNumeros(surpresinhaMega(+e.target.value))
                }} />
            </div>
            <button onClick={generateSurpresinha}>Gerar Valores</button>
        </div>
    );
}

export default Mega;
