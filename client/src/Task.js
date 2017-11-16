import React, { Component } from 'react';
import './Task.css';

class Tasks extends Component {
  render() {
    return (
      <div className="Tasks">
      <tr>
        <td className="Task">{this.props.Task.Name}</td>
      </tr>
      </div>
    );
  }
}

export default Tasks;