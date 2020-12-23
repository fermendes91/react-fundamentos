import React from 'react'

export default props => {
    const result = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return (
        <React.Fragment>
            O valor aleatorio entre {props.min} e {props.max} é: {result}
        </React.Fragment>
    )
}