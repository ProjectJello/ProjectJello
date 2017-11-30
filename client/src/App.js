import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard.js';

class App extends Component {
  render() {
    return (
      <div className="login">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard/:username" component={Dashboard} />
      </div>
    )
  }
}

export default App;
