import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js';
import ProjectView from './ProjectView.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    fetch(`/api/?request=userread&usern=${props.match.params.username}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log(user);
      })
      .catch(() => {
        console.log('User does not exist.');
      });
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="ProjectView">
        	<ProjectView />
        </div>
      </div>
    );
  }
}

export default Dashboard;
