import React from 'react';

import { withAuthContext } from '../AuthProvider'


import './styles.css'

const Header = props => {
    const { setIsLoggedIn } = props
    const handleLogout = e => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    return (
        <header>
            <h3>NewBeSoftware</h3>
            <div className="link-container">
                <a href="/login" className="active" onClick={handleLogout}>Logout</a>
                <a href="/">Users</a>
                <a href="/products">Produtos</a>
            </div>

        </header>
    );
}

export default withAuthContext(Header);