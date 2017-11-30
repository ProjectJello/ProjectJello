import React, { Component } from 'react';
import './RiskStatus.css';

class RiskStatus extends Component {
  render() {
    return (
      <div className={"RiskSeverity" + this.props.Severity}>
      	<div id="RiskText">
      		{ this.props.Severity === 0 && 'Addressed' }
          { this.props.Severity === 1 && 'Low' }
          { this.props.Severity === 2 && 'Medium' }
      		{ this.props.Severity === 3 && 'Critical' }
  		  </div>
        <div id="RiskMarkerText">
          { this.props.Severity === 0 && '✓' }
          { this.props.Severity === 1 && '!' }
          { this.props.Severity === 2 && '!!' }
          { this.props.Severity === 3 && '!!!' }
        </div>
      </div>
    );
  }
}

export default RiskStatus;