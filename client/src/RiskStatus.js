import React, { Component } from 'react';
import './RiskStatus.css';

class RiskStatus extends Component {
  render() {
    return (
      <div className={"RiskSeverity" + this.props.Severity}>
        <div className="select-box" id="RiskText">
          <select onChange={this.statusOnChange.bind(this)}>
            <option selected={this.props.Severity === 0 && 'selected'} value="0">Addressed</option>
            <option selected={this.props.Severity === 1 && 'selected'} value="1">Low</option>
            <option selected={this.props.Severity === 2 && 'selected'} value="2">Medium</option>
            <option selected={this.props.Severity === 3 && 'selected'} value="3">Critical</option>
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

  //onChangeMethods
  statusOnChange(event) {
    var newStatusNumber = event.target.value;
    alert(newStatusNumber);
  }
}

export default RiskStatus;