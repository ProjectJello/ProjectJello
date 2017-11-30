import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>
        <div className="TaskLabel">
          <span>Status:</span>
        </div>
      	<div className="select-box" id="StatusText">
          <select>
        		<option selected={this.props.Status === 0 && 'selected'}>Open</option>
        		<option selected={this.props.Status === 1 && 'selected' }>In Progress</option>
        		<option selected={this.props.Status === 2 && 'selected' }>Complete</option>
    		  </select>
        </div>

        <div className="Assignee">
          <div className="TaskLabel">
            <span>Assignee:</span>
          </div>
         <div className="select-box" id="AssigneePerson">
           <select>
            { this.props.UserData.length ? (
              this.props.UserData.map((item, index) => (
                  <option>{index}</option>
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
        		<input type="number" className="TaskHoursInput" defaultValue={this.props.Hours} />
    		  </div>
          <div className="TaskLabel">
            <span id="TaskHoursLabel">h/week</span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default TaskStatus;