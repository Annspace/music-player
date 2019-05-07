import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Main from './Main';
import Login from './Login';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
          </Switch>
          {authenticated ? <Redirect to="/" /> : <Redirect to="/login" />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authUser.authenticated,
});

export default connect(mapStateToProps)(App);
