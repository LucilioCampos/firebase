import React, { useState } from 'react';
import api from '../../utils/api'
import * as auth from '../../utils/auth'

import { withAuthContext } from '../AuthProvider'


import './styles.css'


const Login = (props) => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(props)
    api.post('/user_token', {
      auth: {
        email,
        password
      }
    })
      .then(data => {
        console.log(data)
        auth.login(data.jwt)
      })
      .catch(err => console.error(err))
  }

  return (
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
  );
}

export default Login;