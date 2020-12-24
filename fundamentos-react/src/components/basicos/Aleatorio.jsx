import React from 'react'

const func = (props) => {
    const { min, max } = props; 
    const result = parseInt(Math.random() * (max - min)) + min;

    return (
        <React.Fragment>
            <h2>O valor aleatorio entre {min} e {max} é: {result}</h2>
        </React.Fragment>
    )
}

export default func;