import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from '../store/actions/numeros'

import './Intervalo.css'

const Intervalo = (props) => {
  const { max, min } = props
  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarNumeroMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarNumeroMaximo(+e.target.value)}
          />
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

const mapDispatchToProps = (dispatch) => {
  return {
    alterarNumeroMinimo: (novoNumero) => {
      // action creator -> retorna uma action
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    },
    alterarNumeroMaximo: (novoNumero) => {
      const action = alterarNumeroMaximo(novoNumero)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
