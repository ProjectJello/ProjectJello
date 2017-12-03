import React, { Component } from 'react';
import './ProjectInfoView.css';

class ProjectInfoView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProjectInfoView">
          <div className="givemespace">
          </div>
          <div className="ProjectInfoHeader">
                <h1 className= "h1"> {this.props.ProjectInfoData.name} </h1>  
          </div>

          <div className="ProjectInfoDescription editable">
            <p className= "slidetotheleft">  Stuff and things </p>
          </div>           

      </div>
    );
  }
}

export default ProjectInfoView;