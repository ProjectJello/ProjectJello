import React, { Component } from 'react';
import fulllogo from './JelloFullLogo.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <form className="Login">
          <div className = "Spacer">
            
            <img className ="Login-logo" alt="" src={fulllogo} />
          </div>
          <div className = "El-Container Spacer"> 
              <input className = "input"
              placeholder = 'Username' />
          </div>
          <div className = "El-Container Spacer">
            <button className ="button" type = "submit">
              Login
              </button>
            </div>
      </form>
    );
  }
}

export default Login;
