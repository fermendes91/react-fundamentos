import React from 'react'

import Card from './Card'

const Sorteio = (props) => {
  const aleatorio = 8
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
