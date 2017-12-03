import React, { Component } from 'react';
import './ProjectInfoView.css';
import ContentEditable from './ContentEditable.js';

class ProjectInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProjectInfoView">
          <div className="ProjectInfoHeader">
                <div className="ProjectTitle">
                  <ContentEditable  html={this.props.ProjectInfoData.name} onChange={this.projectNameOnChange.bind(this)}/> 
                </div>
          </div>

          <div className="ProjectInfoDescription">
                <div className="CreateDescriptionMargin">
                  <ContentEditable  html={this.props.ProjectInfoData.description} onChange={this.projectDescriptionOnChange.bind(this)}/> 
                </div>
          </div>           

      </div>
    );
  }

   //onChangeMethods
  projectNameOnChange(event) {
    var newName = event.target.value;

    alert(newName);
  }

  projectDescriptionOnChange(event) {
    var newName = event.target.value;

    alert(newName);
  }

}

export default ProjectInfoView;


