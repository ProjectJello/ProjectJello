import React, { Component } from 'react';
import './ProjectView.css';
import TasksView from './TasksView.js'
import ProjectInfoView from './ProjectInfoView.js'

class ProjectView extends Component {
  render() {
    return (
      <div className="ProjectView">
        <ProjectInfoView/>
        <TasksView />
      </div>
    );
  }
}

export default ProjectView;