import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>
      	<div className="select-box"id="StatusText">
          <select>
        		<option selected={this.props.Status === 0 && 'selected'}>Open</option>
        		<option selected={this.props.Status === 1 && 'selected' }>In Progress</option>
        		<option selected={this.props.Status === 2 && 'selected' }>Complete</option>
    		  </select>
        </div>
      	<a href="" id="TaskAssigneeIconContainer"> <img id="TaskAssigneeIcon" src={this.props.Assignee.pfp} /> </a>
      	<div id="TaskHoursContainer">
      		<input type="number" className="TaskHoursInput" defaultValue={this.props.Hours} /> <span>hours</span>
  		  </div>
      </div>
    );
  }
}

export default TaskStatus;