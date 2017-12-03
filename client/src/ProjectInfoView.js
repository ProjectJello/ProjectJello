import React, { Component } from 'react';
import './ProjectInfoView.css';

class ProjectInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProjectInfoView">
          <div className="ProjectInfoHeader">
                <span className="ProjectTitle"><b>{this.props.ProjectInfoData.name}</b></span>  
          </div>

          <div className="ProjectInfoDescription editable">
            <p className="CreateDescriptionMargin">  Stuff and things </p>
          </div>           

      </div>
    );
  }
}

export default ProjectInfoView;


