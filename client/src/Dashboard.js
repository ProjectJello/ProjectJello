import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js';
import ProjectView from './ProjectView.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProjectData: [],
      currentProjectArrayIndex: null
    };

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
        return Promise.all(this.user.projects.map(projectId => {
          return fetch(`/api/?request=projectread&projId=${projectId}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json'
            }
          })
          .then(response => response.json())
        }))
      })
      .then((projects) => {
        this.setState({
          ProjectData: projects
        });
      })
      .catch(() => {
        console.log('User or a Project does not exist.');
      });
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Sidebar">
          <Sidebar ProjectData={this.state.ProjectData} SelectedProject={this.state.currentProjectArrayIndex} OnClick={this.ProjectOnClick.bind(this)} onSubmitNewProject={this.onSubmitNewProject.bind(this)} />
        </div>
        <div className="ProjectView">
          { this.state.currentProjectArrayIndex !== null ? (
              <ProjectView ProjectData={this.state.ProjectData[this.state.currentProjectArrayIndex]} onSubmitNewTask={this.onSubmitNewTask.bind(this)}/>
            ) : (
              <h1>Nothing to show.</h1>
            )
          }
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
        this.setState({
          ProjectData: [
            ...this.state.ProjectData,
            project
          ]
        })
      });
  }

  onSubmitNewTask(taskName) {
    fetch(`/api/?request=tasknew&usern=${this.user.name}&projId=${this.state.ProjectData[this.state.currentProjectArrayIndex].id}&taskn=${taskName}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(task => {
        let ProjectData = [...this.state.ProjectData];
        ProjectData[this.state.currentProjectArrayIndex] = Object.assign({}, ProjectData[this.state.currentProjectArrayIndex]);
        ProjectData[this.state.currentProjectArrayIndex].tasks = [
          ...ProjectData[this.state.currentProjectArrayIndex].tasks,
          task.id
        ];
        this.setState({ ProjectData });
      });
  }

  ProjectOnClick(index) {
    this.setState({
      currentProjectArrayIndex: index
    });
  }
}

export default Dashboard;
