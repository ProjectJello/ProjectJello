import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js';
import ProjectView from './ProjectView.js';

class Dashboard extends Component {
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
