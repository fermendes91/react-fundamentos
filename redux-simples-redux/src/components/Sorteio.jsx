import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = (props) => {
  const { max, min } = props
  const aleatorio = parseInt(Math.random() * (max - min) + min)
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

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Sorteio)
