import React, { useState, useEffect } from 'react';

import * as auth from '../../utils/auth'

export const AuthContext = React.createContext({})

export const withAuthContext = Component => props => (
  <AuthContext.Consumer>
    {authProps => <Component {...props} {...authProps} />}
  </AuthContext.Consumer>
)

const AuthProvider = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = auth.getToken()
    if (token) {
      setIsLoggedIn(true)
      console.log(token)
    }
  }, [isLoggedIn])



  const { children } = props
  const value = {
    isLoggedIn,
    setIsLoggedIn
  }


  
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}

export default (AuthProvider)