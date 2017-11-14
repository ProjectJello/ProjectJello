import React, { Component } from 'react';
import './ProjectView.css';
import TasksView from './TasksView.js'

class ProjectView extends Component {
  render() {
    return (
      <div className="ProjectView">
        <TasksView />
      </div>
    );
  }
}

export default ProjectView;