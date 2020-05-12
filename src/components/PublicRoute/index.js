import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {withAuthContext} from '../AuthProvider'

const PublicRoute = ({component: Component, restricted, isLoggedIn, ...rest}) => {

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default withAuthContext(PublicRoute);