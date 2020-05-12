import React from 'react';

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

import AuthProvider from './components/AuthProvider'
import Dashboard from './components/Dashboard';
import ListProducts from './components/Products/ListProducts'

function Routes() {

    return (

        <AuthProvider>
            <Router>
                <Switch>
           
                    <PrivateRoute component={Dashboard} path="/dashboard" exact />
                    <PrivateRoute component={ListProducts} path="/products" exact />

                    <PublicRoute restricted={true} component={Login} path="/login" exact />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default Routes