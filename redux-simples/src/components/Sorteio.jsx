import React from 'react'

import Card from './Card'

const Sorteio = (props) => {
  const { minimo, maximo } = props
  const aleatorio = parseInt(Math.random() * (maximo - minimo))
  return (
    <Card title="Sorteio de um número" green>
      <div>
        <span>
          <span>Sortado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Sorteio
