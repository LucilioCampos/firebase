import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { withAuthContext } from '../AuthProvider'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default withAuthContext(PrivateRoute);