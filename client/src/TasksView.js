import React, { Component } from 'react';
import './TasksView.css';
import Task from './Task.js';
import ProjectPlus from './assets/BluePlus.svg';

class TasksView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTaskCreator: false,
      taskNameProvided: ''
    };
  }

  render() {
    return (
      <div className="TasksView">
        <span className="TaskTitle"><b>Tasks</b></span>
        <a href="#" className="Add-Project-Icon" onClick={this.showTaskCreator.bind(this)}> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
        {this.state.showTaskCreator ? (
            <div className="Task-Creator">
              <input value={this.state.taskNameProvided} onChange={this.changeTaskName.bind(this)} placeholder="Enter Task Name" />
              <button onClick={this.submitNewTask.bind(this)}>Create</button>
            </div>
          ) : (
            <span></span>
        )}
      	<div className="TasksTable">
        { this.props.TasksData.length ? (
          this.props.TasksData.map((item, index) => (
              <Task key={item.id} TaskData={item} UserData= {this.props.UserData} onStatusChange={this.changeStatus.bind(this)} onAssigneeChange={this.changeAssignee.bind(this)}/>
          ))
        ) : (
            <h2>No Tasks</h2>
        )}
        </div>
      </div>
    );
  }

  showTaskCreator(event) {
    event.preventDefault();
    this.setState({
      showTaskCreator: true
    })
  }

  changeTaskName(event) {
    this.setState({
      taskNameProvided: event.target.value
    });
  }

  submitNewTask(event) {
    event.preventDefault();
    this.props.onSubmitNewTask(this.state.taskNameProvided);
    this.setState({
      showTaskCreator: false,
      taskNameProvided: ''
    });
  }

  changeStatus(taskId, newStatus) {
    this.props.onChangeStatus(taskId, newStatus);
  }

  changeAssignee(taskId, newName) {
    this.props.onChangeAssignee(taskId, newName);
  }
}

export default TasksView;
