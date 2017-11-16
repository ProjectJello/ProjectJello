import React, { Component } from 'react';
import './Task.css';

class Tasks extends Component {
  render() {
    return (
      <div className="Tasks">
      <tr>
        <td>
        	<h3>{this.props.Task.Name}</h3>
        </td>
      </tr>
      <tr>
      	<span>{this.props.Task.Description}</span>
      </tr>
      </div>
    );
  }
}

export default Tasks;