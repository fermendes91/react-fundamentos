import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addUser } from '../store/actions/userAction'

import Card from './Card'
import './ManageUser.css'

const state = {
  user: { cpf: '', name: '', phone: '' },
}

const ManageUser = (props) => {
  const { addUser } = props
  const [user, setUser] = useState(state.user)

  if (props.selectedUser) {
    setUser(props.selectedUser)
  }

  const insertUser = (event, user) => {
    event.preventDefault()
    addUser(user)
  }

  return (
    <Card title="Registrar Usuario" red>
      <div className="ManageUser">
        <span>
          <strong>CPF: </strong>
          <input
            type="text"
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
          />
          <strong>Nome: </strong>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <strong>Telefone: </strong>
          <input
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </span>
        <button type="submit" onClick={(e) => insertUser(e, user)}>
          Adicionar
        </button>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser)
