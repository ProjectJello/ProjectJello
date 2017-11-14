import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    return (
      <tr>
        <a href="#" onClick={this.clicked.bind(this)}><td className="ProjectName">{this.props.Project.Name}</td></a>
      </tr>
    );
  }

  clicked(event) {
    this.props.FeedData(this.props.Project);
  }
}

export default Project;