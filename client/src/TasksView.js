import React, { Component } from 'react';
import './TasksView.css';
import Task from './Task.js';
import ProjectPlus from './assets/BluePlus.svg';

class TasksView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TasksView">
        <span className="TaskTitle"><b>Tasks</b></span>
        <a href="#" className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
      	<div className="TasksTable">
          {this.props.TasksData.map((item, index) => (
              <Task TaskData={item} />
            ))}
        </div>
      </div>
    );
  }
}

export default TasksView;