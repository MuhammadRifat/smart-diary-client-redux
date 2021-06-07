import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { addLoginData } from './redux/actions/loginAction';

function App(props) {
  const {loggedUser} = props;

  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute loggedUser={loggedUser} path="/home">
            <Home loggedUser={loggedUser}></Home>
          </PrivateRoute>
          <PrivateRoute loggedUser={loggedUser} exact path="/">
            <Home loggedUser={loggedUser}></Home>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

const mapStateToProps = state => {
  return {
      loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = {
  addLoginData: addLoginData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
