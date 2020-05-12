import React, { useEffect, useState } from 'react';

import Header from '../Header'
import ListProducts from '../Products/ListProducts'

import AuthProvider, { withAuthContext } from '../AuthProvider'


function DashBoard(props) {




    return (

        <AuthProvider>
            <Header />
            <ListProducts />
        </AuthProvider>


    );
}

export default withAuthContext(DashBoard)