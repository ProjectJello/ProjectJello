import React, { Component } from 'react';
import './ProjectView.css';
import TasksView from './TasksView.js'

class ProjectView extends Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <div className="ProjectView">
        <TasksView TasksData= {this.props.ProjectData.tasks}/>
      </div>
    );
  }
}

export default ProjectView;