import React, { Component } from 'react';
import './ProjectView.css';
import TasksView from './TasksView.js'
import ProjectInfoView from './ProjectInfoView.js'
import RisksView from './RisksView.js'

class ProjectView extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      TasksData: [],
      RisksData: []
    };

    this.getAndSetTasks(this.props.ProjectData.id, this.props.ProjectData.tasks);
    this.getAndSetRisks(this.props.ProjectData.id, this.props.ProjectData.risks);
  }

  render() {
    return (
      <div>
        <div className="ProjectView">
          <ProjectInfoView ProjectInfoData= {this.props.ProjectData}/>
        </div>
        <div className="TaskAndRiskView">        
          <TasksView TasksData= {this.state.TasksData} onSubmitNewTask={this.props.onSubmitNewTask} UserData={this.props.ProjectData.members} onChangeStatus={this.statusChange.bind(this)}/>
          <RisksView RisksData= {this.state.RisksData} onSubmitNewRisk={this.props.onSubmitNewRisk} />
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ProjectData.tasks !== this.props.ProjectData.tasks) {
      this.getAndSetTasks(nextProps.ProjectData.id, nextProps.ProjectData.tasks);
    }

    if (nextProps.ProjectData.risks !== this.props.ProjectData.risks) {
      this.getAndSetRisks(nextProps.ProjectData.id, nextProps.ProjectData.risks);
    }  
  }

  getAndSetTasks(projectId, taskIds) {
      Promise.all(taskIds.map(taskId => {
        return fetch(`/api/?request=taskread&projId=${projectId}&taskId=${taskId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        })
        .then(response => response.json());
      }))
        .then((tasks) => {
          this.setState({
            TasksData: tasks
          });
        });  
  }

  getAndSetRisks(projectId, riskIds) {
      Promise.all(riskIds.map(riskId => {
        return fetch(`/api/?request=riskread&projId=${projectId}&riskId=${riskId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        })
        .then(response => response.json())
      }))
        .then((risks) => {
          this.setState({
            RisksData: risks
          })
        });
  }

  statusChange(taskId, newStatus) {
    fetch(`/api/?request=taskupdate&projId=${this.props.ProjectData.id}&taskId=${taskId}&field=status&val=${newStatus}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
      .then(response => response.json())
      .then(task => {
        let itemIndex = this.state.TasksData.findIndex(task => task.id === taskId);
        this.setState({
          TasksData: this.state.TasksData.map((item, index) => {
            console.log(index, itemIndex);
            if (index !== itemIndex) {
              return item;
            } else {
              return task;
            }
          })
        });
      });
  }
}

export default ProjectView;
