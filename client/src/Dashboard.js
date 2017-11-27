import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js';
import ProjectView from './ProjectView.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    fetch(`/api/?request=userread&usern=${props.match.params.username}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.user = user;
      })
      .catch(() => {
        console.log('User does not exist.');
      });

    this.ProjectData = [
    { 
      name: "Proj1",
      owner: {name: "Joe",  pfp: "../static/media/examplePfp.png"},
      members: [{name: "Joe",  pfp: "../static/media/examplePfp.png"},{name: "Joe",  pfp: "../static/media/examplePfp.png"}],
      tasks: [{ name: "Task1", description: "Desc1", assignee: {name: "Daniel",  pfp: "../static/media/examplePfp.png"}, hours: 5.0, status: 0},{ name: "Task2", description: "Desc2", assignee: {name: "Joe",  pfp: "../static/media/examplePfp.png"}, hours: 2.0, status: 1}],
      risks: [{ name: "Risk1", description: "Desc1", severity: 0}, { name: "Risk1", description: "Desc1", severity: 1}]
    },
    { 
      name: "Proj2",
      owner: {name: "Sam",  pfp: "../static/media/examplePfp.png"},
      members: [{name: "Joe",  pfp: "../static/media/examplePfp.png"},{name: "Joe",  pfp: "../static/media/examplePfp.png"}],
      tasks: [{ name: "BLAH", description: "Desc1", assignee: {name: "Daniel",  pfp: "../static/media/examplePfp.png"}, hours: 25.0, status: 1},{ name: "Do Stuff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", assignee: {name: "Joe",  pfp: "../static/media/examplePfp.png"}, hours: 2.0, status: 2}],
      risks: [{ name: "BLAH", description: "Desc1", severity: 3}, { name: "Risk1", description: "Desc1", severity: 1}]
    }
    ]

    this.state = {
      currentProjectArrayIndex: 0
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Sidebar">
          <Sidebar ProjectData={this.ProjectData} OnClick={this.ProjectOnClick.bind(this)} onSubmitNewProject={this.onSubmitNewProject.bind(this)} />
        </div>
        <div className="ProjectView">
        	<ProjectView ProjectData={this.ProjectData[this.state.currentProjectArrayIndex]}/>
        </div>
      </div>
    );
  }

  onSubmitNewProject(projectName) {
    fetch(`/api/?request=projectnew&usern=${this.user.name}&projn=${projectName}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((project) => {
        console.log(project);
      });
  }

  ProjectOnClick(index) {
    this.setState({
      currentProjectArrayIndex: index
    });
  }
}

export default Dashboard;
