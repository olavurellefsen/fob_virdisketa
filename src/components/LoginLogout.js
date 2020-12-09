import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginLogout = () => {
  const {
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0()


  if (error) {
    console.log(error.message)
  }

  if (isAuthenticated) {
    return (
      <button
        className="btn btn-default"
        onClick={() => logout({ returnTo: window.location.origin })}
        style={{ marginRight: '20px' }}
      >
        Logga {user.email} út
      </button>
    )
  } else {
    return (
      <button className="btn btn-default" onClick={loginWithRedirect} style={{ marginRight: '20px' }}>
        Logga inn
      </button>
    )
  }
}

export default LoginLogout
