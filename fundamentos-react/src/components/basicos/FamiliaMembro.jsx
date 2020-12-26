import React from 'react'

const FamiliaMembro = props => {
    return (
        <div>
            <span>
                {props.nome} <strong>{props.sobrenome}</strong>
            </span>
        </div>
    )
}

export default FamiliaMembro