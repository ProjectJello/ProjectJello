import React, { Component } from 'react';
import logo from './assets/JelloLogo.svg';
import ProjectPlus from './assets/WhitePlus.svg';
import './Sidebar.css';
import Project from './Project.js';
class Sidebar extends Component {

  constructor() {
    super()
    this.ProjectList = [{ Name: "Proj1" },{ Name: "Proj2" },{ Name: "Proj3" }]
  }

  render() {
    return (
      <div className="Sidebar">
        <img src={logo} className="App-Logo" alt="Jello" />
        <div className="Project">
            <h1 className="Project-Title">Projects</h1>
            <a href="#" className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
        </div>

        <table className="ProjectListTable">
          {this.ProjectList.map((item, index) => (
              <Project Project={item} FeedData={this.ProjectClicked} />
            ))}
        </table>

      </div>
    );
  }

  ProjectClicked(project) {
    alert("alert clicked" + project.Name);
  }

}

export default Sidebar;