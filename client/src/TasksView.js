import React, { Component } from 'react';
import './TasksView.css';
import Task from './Task.js';

class TasksView extends Component {
  constructor() {
    super()
    this.TaskList = [{ Name: "Task1" },{ Name: "Task2" },{ Name: "Task3" }]
  }

  render() {
    return (
      <div className="TasksView">
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