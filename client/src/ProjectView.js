import React, { Component } from 'react';
import './ProjectView.css';
import TasksView from './TasksView.js'
import RisksView from './RisksView.js'

class ProjectView extends Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <div className="ProjectView">
        <TasksView TasksData= {this.props.ProjectData.tasks}/>
        <RisksView RisksData= {this.props.ProjectData.risks}/>
      </div>
    );
  }
}

export default ProjectView;