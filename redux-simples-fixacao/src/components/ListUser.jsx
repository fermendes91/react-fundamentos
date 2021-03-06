import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { selectUser } from '../store/actions/userAction'

import './ListUser.css'

const ListUser = (props) => {
  const { users = [] } = props
  const { onSelectUser } = props

  return (
    <Card title="Listagem Usuarios" purple>
      <table className="ListUser">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
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
    users: state.app.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectUser: (user) => {
      dispatch(selectUser(user))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
