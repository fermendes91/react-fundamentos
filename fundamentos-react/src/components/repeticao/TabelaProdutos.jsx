import React from 'react'

import produtos from '../../data/produtos'
import "./TabelaProdutos.css"

export default (props) => {
    function produtosTR() {
        return produtos.map((prod, i) => {
            return (
                <tr key={prod.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td >{prod.id}</td>
                    <td className="textCenter">{prod.nome}</td>
                    <td className="textCenter">R$ {prod.valor.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <h2 style={{textAlign: 'center'}}>Tabela Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th className="textCenter">Identificador</th>
                        <th className="textCenter">Nome do Produto</th>
                        <th className="textCenter">Valor do Produto</th>
                    </tr>
                </thead>
                <tbody >
                    {produtosTR()}
                </tbody>
            </table>
        </div>
    )
}