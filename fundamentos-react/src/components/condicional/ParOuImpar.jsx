import React from 'react'

export default props => {

    const isPar = props.numero % 2 === 0;
    return (
        <div>
            O número {props.numero} é {isPar ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}