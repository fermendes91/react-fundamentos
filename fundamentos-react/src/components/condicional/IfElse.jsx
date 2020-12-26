const IfElse = props => {
    // verifica se dentro do componente If existe um componente Else
    const elseChild = props.children.filter(child => child.type && child.type.name === 'Else')[0];

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }

}

export default IfElse
export const Else = props => props.children