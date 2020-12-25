import React from 'react'

import If from './If'
import IfElse, { Else } from './IfElse'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*<If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong> !!
            </If>
            <If test={!usuario || !usuario.nome}>
                Usuario não informado, bem-vindo amigo !
            </If> */}

            <If test={usuario && usuario.nome}>Plataforma Card</If>
            <IfElse test={usuario && usuario.nome}>
                Ola usuario <strong>{usuario.nome}</strong>, tudo bem ?
            
                <Else>
                    Usuario não informado na nossa plataforma.
                </Else>
            </IfElse>
        </div>
    )
}