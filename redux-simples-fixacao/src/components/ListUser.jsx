import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { onSelectUser } from '../store/actions/userAction'

import './ListUser.css'

const selectUser = (user) => {
  onSelectUser(user)
}

const ListUser = (props) => {
  const { users } = props.users
  const { onSelectUser } = props

  return (
    <Card title="Listagem Usuarios" purple>
      <table className="ListUser">
        <thead>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} onClick={() => onSelectUser(user)}>
                <td>{user.cpf}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectUser: async (user) => {
      await dispatch(selectUser(user))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
