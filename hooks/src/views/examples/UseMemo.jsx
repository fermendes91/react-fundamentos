import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const sum = (n1, n2) => {
    const future = Date.now() + 2000;
    
    while (Date.now() < future) {} // codigo de esperar por 2s

    return n1 + n2
}

// Retorna um valor memorizado
const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    /* const result = sum(n1, n2) 
    
       Da forma como esta implementado acima, o sum sempre será chamado por mais que tenhamos alterações no n3.
       com o UseMemo podemos criar uma variavel memorizada (cache), para que uma determinada função mais demorada só 
       seja executada quando realmente houver necessidade de atualizar o valor.

       Como o n3 não tem vinculos com o n1, e n2... não teriamos porque reexecutar o sum a cada renderização
       ao atualizarmos o valor de n3.
    */

    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" name="n1" id="n1" className="input"
                    value={n1} onChange={e => setN1(parseInt(e.target.value))} />
                <input type="number" name="n2" id="n2" className="input"
                    value={n2} onChange={e => setN2(parseInt(e.target.value))} />
                <input type="number" name="n3" id="n3" className="input"
                    value={n3} onChange={e => setN3(parseInt(e.target.value))} />
                <span className="text">{result}</span>
            </div>
        </div>

    )
}

export default UseMemo
