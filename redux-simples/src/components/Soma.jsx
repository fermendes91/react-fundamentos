import React from 'react'

import Card from './Card'

const Soma = (props) => {
  const { minimo, maximo } = props
  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>
          <span>Somatario: </span>
          <strong>{minimo + maximo}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Soma
