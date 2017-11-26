import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>

      </div>
    );
  }
}

export default TaskStatus;