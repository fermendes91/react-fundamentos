import React from 'react'

import Card from './Card'

const Media = (props) => {
  const { minimo, maximo } = props

  return (
    <Card title="Média dos números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(minimo + maximo) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Media
