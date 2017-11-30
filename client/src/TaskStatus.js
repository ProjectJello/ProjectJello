import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>
      	<div id="StatusText">
      		{ this.props.Status === 0 && 'Open' }
      		{ this.props.Status === 1 && 'In Progress' }
      		{ this.props.Status === 2 && '✓ Complete' }
  		  </div>
      	<a href="" id="TaskAssigneeIconContainer"> <img id="TaskAssigneeIcon" src={this.props.Assignee.pfp} /> </a>
      	<div id="TaskHoursContainer">
      		<span id="TaskHours">{this.props.Hours}h</span>
  		  </div>
      </div>
    );
  }
}

export default TaskStatus;