import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoursInputValue: this.props.Hours
    };
  }
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>
        <div className="TaskLabel">
          <span>Status:</span>
        </div>
      	<div className="select-box" id="StatusText">
          <select onChange={this.statusOnChange.bind(this)}>
        		<option selected={this.props.Status === 0 && 'selected'} value="0">Open</option>
        		<option selected={this.props.Status === 1 && 'selected'} value="1">In Progress</option>
        		<option selected={this.props.Status === 2 && 'selected'} value="2">Complete</option>
    		  </select>
        </div>

        <div className="Assignee">
          <div className="TaskLabel">
            <span>Assignee:</span>
          </div>
         <div className="select-box" id="AssigneePerson">
           <select onChange={this.assigneeOnChange.bind(this)}>
            { this.props.UserData.length ? (
              this.props.UserData.map((item, index) => (
                  <option selected={item.name === this.props.Assignee.name && 'selected'}>{item.name}</option>
              ))
            ) : (
                <h2>No Members</h2>
            )}
            </select>
        	</div>
        </div>

        <div className="HoursArea">
          <div className="TaskLabel">
            <span>Man-hours:</span>
          </div>
          <div id="TaskHoursContainer">
        		<input type="number"  min="0" className="TaskHoursInput" value={this.state.hoursInputValue} onChange={this.hoursOnChange.bind(this)} onBlur={this.propagateHoursChange.bind(this)}/>
    		  </div>
          <div className="TaskLabel">
            <span id="TaskHoursLabel">h/week</span>
          </div>
        </div>
        
      </div>
    );
  }

//onChangeMethods
  statusOnChange(event) {
    var newStatusNumber = event.target.value;
    this.props.onStatusChange(this.props.TaskId, newStatusNumber);
  }

  assigneeOnChange(event) {
    var newName = event.target.value;
    this.props.onAssigneeChange(this.props.TaskId, newName);
  }

  hoursOnChange(event) {
    this.setState({
      hoursInputValue: event.target.value
    });
  }

  propagateHoursChange() {
    this.props.onHoursChange(this.props.TaskId, this.state.hoursInputValue);
  }

}

export default TaskStatus;
