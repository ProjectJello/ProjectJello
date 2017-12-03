import React, { Component } from 'react';
import './RisksView.css';
import Risk from './Risk.js';
import ProjectPlus from './assets/BluePlus.svg';

class RisksView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRiskCreator: false,
      riskNameProvided: '',
      riskSeverityProvided: 0
    };
  }

  render() {
    return (
      <div className="RisksView">
        <span className="RiskTitle"><b>Risks</b></span>
        <a href="#" className="Add-Project-Icon" onClick={this.showRiskCreator.bind(this)}>> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
        {this.state.showRiskCreator ? (
            <div className="Risk-Creator">
              <input value={this.state.riskNameProvided} onChange={this.changeRiskName.bind(this)} placeholder="Enter Risk Name" />
              <select onChange={this.changeRiskSeverity.bind(this)}>
                <option value="0">Addressed</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
              <button onClick={this.submitNewRisk.bind(this)}>Create</button>
            </div>
          ) : (
            <span></span>
        )}
      	<div className="RisksTable">
          {this.props.RisksData.length ? (
            this.props.RisksData.map((item, index) => (
                <Risk RiskData={item} onRiskStatusChange={this.props.onRiskStatusChange.bind(this)} />
              ))
            ) : (
              <h2>Risk Free!</h2>
          )}
        </div>
      </div>
    );
  }

  showRiskCreator(event) {
    event.preventDefault();
    this.setState({
      showRiskCreator: true
    })
  }

  changeRiskName(event) {
    this.setState({
      riskNameProvided: event.target.value
    });
  }

  changeRiskSeverity(event) {
    this.setState({
      riskSeverityProvided: event.target.value
    });
  }

  submitNewRisk(event) {
    event.preventDefault();
    this.props.onSubmitNewRisk(this.state.riskNameProvided, this.state.riskSeverityProvided);
    this.setState({
      showRiskCreator: false,
      riskNameProvided: '',
      riskSeverityProvided: 0
    });
  }

  onRiskStatusChange(riskId, newSeverity) {
    this.props.onRiskStatusChange(riskId, newSeverity);
  }
}

export default RisksView;
