import React from 'react';

import Header from './components/Header'
import Login from './components/Login'
import AuthProvider from './components/AuthProvider'

import './global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AuthProvider>
        <Login />
      </AuthProvider>
      
    </div>
  );
}

export default App;
