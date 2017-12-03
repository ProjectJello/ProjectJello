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
        <div className="ProjectHeaderAndMembers">

          <div className="ProjectInfoHeader">

            <div className="ProjectTitle">
                  <ContentEditable  html={this.props.ProjectInfoData.name} onChange={this.projectNameOnChange.bind(this)}/> 
            </div>
          </div>

          <div className="Members">
            <div className="Owner">
              <span>
                Owner:
                
                  <img className="PFP" src={this.props.ProjectInfoData.owner.pfp} height="30px" width="35px" />
              </span>
            </div>

            <div className="MembersList">
              <span>
                Members:
                  {this.props.ProjectInfoData.members.map((item, index) => (
                  <img className="PFP" src={'..' + item.pfp} height="30px" width="35px" />
                ))}
              </span>
            </div>

          </div>

        </div>

        <div className="ProjectInfoDescription">
                <div className="CreateDescriptionMargin">
                  <ContentEditable html={this.props.ProjectInfoData.description} onChange={this.projectDescriptionOnChange.bind(this)}/> 
                </div>
          </div>           
      </div>
    );
  }

   //onChangeMethods
  projectNameOnChange(event) {
    var newName = event.target.value;

    this.props.onProjectNameChange(newName);
  }

  projectDescriptionOnChange(event) {
    var newDescription = event.target.value;

    this.props.onProjectDescriptionChange(newDescription);
  }

}

export default ProjectInfoView;


