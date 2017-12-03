import React, { Component } from 'react';
import './ProjectInfoView.css';

class ProjectInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProjectInfoView">
        <div className="ProjectHeaderAndMembers">

          <div className="ProjectInfoHeader">
            <span className="ProjectTitle"><b>{this.props.ProjectInfoData.name}</b></span>  
          </div>

          <div className="Members">
            <div className="Owner">
              <span>
                Owner:
                
                  <img className="PFP" src={this.props.ProjectInfoData.owner.pfp} height="30px" width="30px" />
              </span>
            </div>

            <div className="MembersList">
              <span>
                Members:
                  {this.props.ProjectInfoData.members.map((item, index) => (
                  <img className="PFP" src={'..' + item.pfp} height="30px" width="30px" />
                ))}
              </span>
            </div>

          </div>

        </div>

        <div className="ProjectInfoDescription editable">
          <p className="CreateDescriptionMargin">  Stuff and things </p>
        </div>           
      </div>
    );
  }
}

export default ProjectInfoView;


