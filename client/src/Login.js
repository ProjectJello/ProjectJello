import React, { Component } from 'react';
import fulllogo from './JelloFullLogo.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div className = "Spacer">
            
            <img className ="Login-logo" alt="" src={fulllogo} />
          </div>
          <div className = "Spacer"> 
              <input className = "input"
              placeholder = 'Username' />
          </div>
          <div className = "Spacer">
            <button className ="button">
              Login
              </button>
            </div>
      </div>
    );
  }
}

export default Login;
