import React, { Component } from 'react';
import './Task.css';
import TaskStatus from './TaskStatus.js';

class Tasks extends Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <div className="Tasks">
	      <div className="Task-Row">
	      	  <div className="Task-Name-Description flex-fill">
			      <div className="Task-Name">
			        <span>{this.props.TaskData.name}</span>
			      </div>
			      <div className="Task-Description">
			      	<span>{this.props.TaskData.description}</span>
			      </div>
			  </div>
		      <div className="Task-Status">
		      	<TaskStatus Assignee={this.props.TaskData.assignee} Hours={this.props.TaskData.hours} Status={this.props.TaskData.status} UserData= {this.props.UserData} />
		      </div>
	      </div>
      </div>
    );
  }
}

export default Tasks;