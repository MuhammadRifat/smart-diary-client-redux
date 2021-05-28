import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './components/Login/Login';

export const userContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </userContext.Provider>
    );
};

export default App;