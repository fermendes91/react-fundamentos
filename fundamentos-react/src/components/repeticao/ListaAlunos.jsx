import React from 'react'

import alunos from '../../data/alunos'

export default props => {
    console.log(alunos);

    const alunosLI = alunos.map( aluno => {
        const text = `${aluno.id}) ${aluno.nome} --> ${aluno.nota} `
        return <li key={aluno.id}>{text}</li>
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosLI}
            </ul>
        </div>
    )
}