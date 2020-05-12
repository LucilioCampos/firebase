import React, { useState } from 'react';

import api from '../../utils/api'
import * as auth from '../../utils/auth'

import './styles.css'
import { withAuthContext } from '../AuthProvider';

import Loader from '../Loader';


const Login = (props) => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    console.log(props)
    try {
      const response = (await api.post('/user_token', {
        auth: {
          email,
          password
        }
      })).data

      console.log(response)

      if (response.jwt) {
        console.log(response.jwt)
        auth.login(response.jwt)
        props.setIsLoggedIn(true)
        // setLoading(false)
      }
    } catch (err) {
      console.error(err)
      // setLoading(false)
    }
  }

  return (
    <Loader waiting={loading}>
      <div className="flex-box">

        <div className="login-wrapper">
          <div className="login-header">
            <h2>Faça seu login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <input
              id="email"
              type="text"
              placeholder="digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              id="password"
              type="password"
              placeholder="digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Signin</button>
          </form>
        </div>
      </div>
    </Loader>
  );
}

export default withAuthContext(Login);