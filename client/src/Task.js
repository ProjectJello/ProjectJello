import React, { Component } from 'react';
import './Task.css';
import TaskStatus from './TaskStatus.js';
import ContentEditable from './ContentEditable.js';

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
			      <ContentEditable html={this.props.TaskData.name} onChange={this.taskNameOnChange.bind(this)} /> 
			    </div>  
			    <div className="Task-Name">
			      <ContentEditable html={this.props.TaskData.description} onChange={this.taskDescriptionOnChange.bind(this)} />
			    </div> 
			  </div>
		      <div className="Task-Status">
		      	<TaskStatus Assignee={this.props.TaskData.assignee} Hours={this.props.TaskData.hours} Status={this.props.TaskData.status} UserData= {this.props.UserData} />
		      </div>
	      </div>
      </div>
    );
  }

  //onChangeMethods
  taskNameOnChange(event) {
	var newName = event.target.value;

	alert(newName);
  }

  taskDescriptionOnChange(event) {
	var newName = event.target.value;

	alert(newName);
  }
}

export default Tasks;