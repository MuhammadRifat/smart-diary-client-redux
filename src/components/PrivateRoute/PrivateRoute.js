import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({loggedUser, children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedUser.email ? (      // checking user already loggedIn or not
                children
                ) : (
                <Redirect                   // Redirect to login page
                    to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
        }
        />
    );
};

export default PrivateRoute;