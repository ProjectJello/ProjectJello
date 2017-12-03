import React, { Component } from 'react';
import './RiskStatus.css';

class RiskStatus extends Component {
  render() {
    return (
      <div className={"RiskSeverity" + this.props.Severity}>
        <div className="RiskLabel">
          <span>Severity:</span>
        </div>
        <div className="select-box" id="RiskText">
          <select onChange={this.statusOnChange.bind(this)}>
            <option selected={this.props.Severity === 0 && 'selected'} value="0">Addressed</option>
            <option selected={this.props.Severity === 1 && 'selected'} value="1">Low</option>
            <option selected={this.props.Severity === 2 && 'selected'} value="2">Medium</option>
            <option selected={this.props.Severity === 3 && 'selected'} value="3">Critical</option>
          </select>
        </div>
        <div id="RiskMarkerText">
          { parseInt(this.props.Severity, 10) === 0 && '✓' }
          { parseInt(this.props.Severity, 10) === 1 && '!' }
          { parseInt(this.props.Severity, 10) === 2 && '!!' }
          { parseInt(this.props.Severity, 10) === 3 && '!!!' }
        </div>
      </div>
    );
  }

  //onChangeMethods
  statusOnChange(event) {
    var newRiskSeverity = event.target.value;
    this.props.onRiskStatusChange(newRiskSeverity);
  }
}

export default RiskStatus;
