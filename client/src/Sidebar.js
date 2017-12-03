import React, { Component } from 'react';
import logo from './assets/JelloLogo.svg';
import ProjectPlus from './assets/WhitePlus.svg';
import './Sidebar.css';
import ProjectListItem from './ProjectListItem.js';
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.showProjectCreator = this.showProjectCreator.bind(this);
    this.submitNewProject = this.submitNewProject.bind(this);
    this.changeProjectName = this.changeProjectName.bind(this);

    this.state = {
      AllUsersData: [],
      showProjectCreator: false,
      projectNameProvided: '',
      projectMembersProvided: []
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
                <div>
                  <hr/>
                  <div className="Project-Creator">
                    <input type="text" value={this.state.projectNameProvided} onChange={this.changeProjectName} placeholder="Enter Project Name" />
                    <div>
                      Select Members:
                      {this.state.AllUsersData.map(user => (
                        <div>
                          <input type="checkbox" name={user.name} onChange={this.changeMembers.bind(this)} /> { user.name }
                        </div>
                      ))}
                    </div>
                    <button onClick={this.submitNewProject}>Create</button>
                  </div>
                  <hr/>
                </div>
              ) : (
                <div></div>
            )}
        </div>

        <table className="ProjectListTable">
          {this.props.ProjectData.map((item, index) => (
              <ProjectListItem IsSelected={this.props.SelectedProject === index} ProjectData={item} Index={index} OnClick={this.props.OnClick} />
            ))}
        </table>

      </div>
    );
  }

  showProjectCreator(event) {
    event.preventDefault();

    fetch(`/api/?request=userreadall`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then((users) => {
        this.setState({
          AllUsersData: users,
          showProjectCreator: true
        });
      });
  }

  changeProjectName(event) {
    this.setState({
      projectNameProvided: event.target.value
    });
  }

  changeMembers(event) {
    if (event.target.checked) {
      this.setState({
        projectMembersProvided: [
          ...this.state.projectMembersProvided,
          event.target.name
        ]
      });
    } else {
      this.setState({
        projectMembersProvided: this.state.projectMembersProvided.filter(member => member != event.target.name)
      });
    }
  }

  submitNewProject(event) {
    event.preventDefault();
    this.props.onSubmitNewProject(this.state.projectNameProvided, this.state.projectMembersProvided);
    this.setState({
      showProjectCreator: false,
      projectNameProvided: '',
      projectMembersProvided: []
    });
  }

  ProjectClicked(project) {
    alert("alert clicked" + project.Name);
  }
}

export default Sidebar;
