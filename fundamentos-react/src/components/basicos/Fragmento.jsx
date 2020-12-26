import React from 'react'

function Fragmento(props) {
    return (
        // A forma reduzida de utilizar um fragmento é pela tag <> </>, mas desta forma não é possivel passar parametros para o Fragmento.
        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </React.Fragment>
    )
}

export default Fragmento