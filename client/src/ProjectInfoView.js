import React, { Component } from 'react';
import './ProjectInfoView.css';
import Project from './Project.js';

class ProjectInfoView extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="ProjectInfoView">
          <div className="givemespace">
            </div>
          <div className="ProjectInfoHeader">
                <h1 className= "h1"> Heading </h1>  
          </div>
            <div className="ProjectInfoDescripton">
                <p className= "slidetotheleft">  Stuff and things </p>
            </div>

      </div>
    );
  }
}

export default ProjectInfoView;