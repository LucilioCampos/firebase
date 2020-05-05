import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import * as auth from '../../utils/auth'

export const AuthContext = React.createContext({})

export const withAuthContext = Component => props => (
  <AuthContext.Consumer>
    {authProps => <Component {...props} {...authProps} />}
  </AuthContext.Consumer>
)

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    isAdmin: false,
    user: {}
  }

  async componentWillMount() {
    const token = auth.getToken()
    if (token) {
      this.setState({ isLoggedIn: true })
      console.log(token)
    }
  }

  render() {
    const { children } = this.props

    const value = {
      ...this.state
    }
    return (
      <>
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      </>
    )
  }
}

export default (AuthProvider)