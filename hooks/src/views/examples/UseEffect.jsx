import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = +num;

    if (n < 0) return -1
    if (n === 0) return 1

    return calcFatorial(n - 1) * n
}


/*  Permite executar efeitos colaterais em componentes funcionais ()
    OU SEJA, se o estado de um variavel for alterado, podera causar impactos em outros componentes ou estados */
const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [isImpar, setIsImpar] = useState(true)

    /*  não podemos dentro da função de renderização do componente, chamar funções que alterem estados.
        para que isto aconteça precisamos chamar o useEffect, passando como parametro a função de callback
        e qual variavel a funcao de callback depende para realizar as modificações */
    useEffect(_ => {
        setFatorial(calcFatorial(number))

        // desafio
        setIsImpar(number % 2)
    }, [number])

    useEffect(_ => {
        if (fatorial > 3000000) {
            document.title = "É mais de 3 milhoes !!!!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="#Exercicio 01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial >= 0 ? fatorial : 'Não Existe'}</span>
                </div> 
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value) }/>
            </div>

            <SectionTitle title="#Exercicio 02 - Desafio" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{isImpar ? 'Ímpar' : 'Par'}</span>
                </div> 
            </div>

        </div>
    )
}

export default UseEffect
