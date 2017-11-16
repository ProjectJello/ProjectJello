import React, { Component } from 'react';
import './TasksView.css';
import Task from './Task.js';
import ProjectPlus from './assets/BluePlus.svg';

class TasksView extends Component {
  constructor() {
    super()
    this.TaskList = [{ Name: "Task1", Description: "Desc1"}, { Name: "Task2", Description: "Desc2"}, { Name: "Task3", Description: "Desc3"}]
  }

  render() {
    return (
      <div className="TasksView">
        <span className="TaskTitle"><b>Tasks</b></span>
        <a href="#" className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
      	<table className="TasksTable">
          {this.TaskList.map((item, index) => (
              <Task Task={item} />
            ))}
        </table>
      </div>
    );
  }
}

export default TasksView;