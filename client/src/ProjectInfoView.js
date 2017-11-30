import React, { Component } from 'react';
import './ProjectInfoView.css';

class ProjectInfoView extends Component {
  constructor() {
    super()

    this.state = {
      showDescriptionEditor: false,
      ProjectNameProvided: ''
    };

  }

  render() {
    return (
      <div className="ProjectInfoView">
          <div className="givemespace">
          </div>
          <div className="ProjectInfoHeader">
                <h1 className= "h1"> {this.props.ProjectInfoData.name} </h1>  
          </div>
         { this.state.showDescriptionEditor ? (
            <div>
              <div className="ProjectInfoDescription">
                  <textarea className= "textarea"> </textarea>
              </div>
              <div> 
                <button onClick={this.hideDescriptionEditor.bind(this)}> Cancel </button>
                <button> Save </button>
              </div>
            </div>
          ) : (
            <div className="ProjectInfoDescription editable" onClick={this.showDescriptionEditor.bind(this)}>
              <p className= "slidetotheleft">  Stuff and things </p>
            </div>           
          )
         }

      </div>
    );
  }

  showDescriptionEditor(event) {
    event.preventDefault();
    this.setState({
      showDescriptionEditor: true
    })
  }

  hideDescriptionEditor(event) {
    event.preventDefault();
    this.setState({
      showDescriptionEditor: false
    })
  }

  changeProjectName(event) {
    this.setState({
        ProjectNameProvided: event.target.value
    });
  }

  submitNewProject(event) {
    event.preventDefault();
    this.props.onSubmitNewProject(this.state.ProjectNameProvided);
    this.setState({
      showProjectCreator: false,
      ProjectNameProvided: ''
    });
  }
}

export default ProjectInfoView;