
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Usertypes"
import { fetchUsers } from '../redux/user/UserActions'



function UserContainer(userData, fetchUsers) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    fatchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserContainer)
