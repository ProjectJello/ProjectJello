import React, { Component } from 'react';
import fulllogo from './JelloFullLogo.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.changeUsername = this.changeUsername.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      providedUsername: ''
    };
  }

  render() {
    return (
      <form className="Login" onSubmit={this.login}>
          <div className = "Spacer">
            
            <img className ="Login-logo" alt="" src={fulllogo} />
          </div>
          <div className = "El-Container Spacer"> 
              <input className = "input"
              placeholder = 'Username'
              value={this.state.providedUsername}
              onChange={this.changeUsername} />
          </div>
          <div className = "El-Container Spacer">
            <button className ="button" type = "submit">
              Login
              </button>
            </div>
      </form>
    );
  }

  changeUsername(event) {
    this.setState({ providedUsername: event.target.value });
  }

  login(event) {
    event.preventDefault();
    fetch(`/api/?request=userlogin&usern=${this.state.providedUsername}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        window.location = `/dashboard/${user.name}`;
      });
  }
}

export default Login;
