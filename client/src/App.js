import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="login">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" render={() => <h1>This is the dashboard</h1>} />
      </div>
    )
  }
}

export default App;
