import React, { Component } from 'react';
import './ProjectListItem.css';

class ProjectListItem extends Component {
  render() {
    return (
      <tr>
        <a href="#" onClick={this.clicked.bind(this)}><td className="ProjectListItem">{this.props.ProjectData.name}</td></a>
      </tr>
    );
  }

  clicked(event) {
    this.props.OnClick(this.props.Index);
  }
}

export default ProjectListItem;