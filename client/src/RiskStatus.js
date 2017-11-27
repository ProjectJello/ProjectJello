import React, { Component } from 'react';
import './RiskStatus.css';

class RiskStatus extends Component {
  render() {
    return (
      <div className={"RiskSeverity" + this.props.Severity}>
        <div className="select-box" id="RiskText">
          <select>
            <option selected={this.props.Severity === 0 && 'selected'}>Addressed</option>
            <option selected={this.props.Severity === 1 && 'selected' }>Low</option>
            <option selected={this.props.Severity === 2 && 'selected' }>Medium</option>
            <option selected={this.props.Severity === 3 && 'selected' }>Critical</option>
          </select>
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