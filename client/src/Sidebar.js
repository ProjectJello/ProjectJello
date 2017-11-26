import React, { Component } from 'react';
import logo from './assets/JelloLogo.svg';
import ProjectPlus from './assets/WhitePlus.svg';
import './Sidebar.css';
import Project from './Project.js';
class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.showProjectCreator = this.showProjectCreator.bind(this);
    this.submitNewProject = this.submitNewProject.bind(this);
    this.changeProjectName = this.changeProjectName.bind(this);

    this.ProjectList = [{ Name: "Proj1" },{ Name: "Proj2" },{ Name: "Proj3" }];
    this.state = {
      showProjectCreator: false,
      projectNameProvided: ''
    };
  }

  render() {
    return (
      <div className="Sidebar">
        <img src={logo} className="App-Logo" alt="Jello" />
        <div className="Project">
            <h1 className="Project-Title">Projects</h1>
            <a href="" onClick={this.showProjectCreator} className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
            {this.state.showProjectCreator ? (
                <div className="Project-Creator">
                  <input value={this.state.projectNameProvided} onChange={this.changeProjectName} placeholder="Enter Project Name" />
                  <button onClick={this.submitNewProject}>Create</button>
                </div>
              ) : (
                <span></span>
            )}
        </div>

        <table className="ProjectListTable">
          {this.ProjectList.map((item, index) => (
              <Project Project={item} FeedData={this.ProjectClicked} />
            ))}
        </table>

      </div>
    );
  }

  showProjectCreator(event) {
    event.preventDefault();
    this.setState({ showProjectCreator: true });
  }

  changeProjectName(event) {
    this.setState({
      projectNameProvided: event.target.value
    });
  }

  submitNewProject(event) {
    event.preventDefault();
    this.props.onSubmitNewProject(this.state.projectNameProvided);
    this.setState({
      showProjectCreator: false,
      projectNameProvided: ''
    });
  }

  ProjectClicked(project) {
    alert("alert clicked" + project.Name);
  }

}

export default Sidebar;
