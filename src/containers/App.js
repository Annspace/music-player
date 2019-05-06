import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.css';
import Main from './Main';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.state = {
      loggedIn: false,
    };
  }

  logIn() {
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" render={() => (<Login onSubmit={this.logIn} />)} />
          </Switch>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
        </div>
      </Router>
    );
  }
}

export default App;
