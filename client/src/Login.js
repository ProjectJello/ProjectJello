import React, { Component } from 'react';
import logo from './Jello_Square.svg';
import fulllogo from './JelloFullLogo.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div>
            <img src={fulllogo} />
          </div>
          <div> 
              <input />
          </div>
      </div>
    );
  }
}

export default Login;
