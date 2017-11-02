import React, { Component } from 'react';
import logo from './assets/JelloLogo.svg';
import ProjectPlus from './assets/WhitePlus.svg';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <img src={logo} className="App-Logo" alt="Jello" />
        <div className="Project">
            <h1 className="Project-Title">Projects</h1>
            <a href className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;