import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
