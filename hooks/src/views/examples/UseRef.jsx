import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
    const split1 = s1.split('')
    const split2 = s2.split('')

    const qtde = split1.length >= split2.length ? split1.length : split2.length;

    let text = ''
    for (let i = 0; i < qtde ; i++) {
        text += (split1[i] || '' ) + (split2[i] || '')
    }

    return text
}

const mergeResposta = (s1, s2) => [...s1].map((letra, index) => `${letra}${s2[index] || ''}`).join('')

// Retorna um objeto mutavel com a proprieda .current
const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const count = useRef(0)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    const [value2, setValue2] = useState("")
    // podemos referenciar componentes html com o useRef utilizando o atributo ref dentro do componente
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])
    
    // usando ref, ao atualizarmos o valor, o render do componente não é acionado novamente
    if (count === 0) count.current = ++count.current;

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />
            
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergeResposta(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
 