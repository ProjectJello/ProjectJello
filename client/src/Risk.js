import React, { Component } from 'react';
import './Risk.css';
import RiskStatus from './RiskStatus.js';
import ContentEditable from './ContentEditable.js';

class Risk extends Component {
  render() {
    return (
      <div className="Risk">
 		<div className="Risk-Row">
	      	<div className="Risk-Name-Description flex-fill">
			    <div className="Risk-Name">
			    	<ContentEditable html={this.props.RiskData.name} onChange={this.riskNameOnChange.bind(this)} />
			    </div>
			    <div className="Risk-Description">
			    	<ContentEditable html={this.props.RiskData.description} onChange={this.riskDescriptionOnChange.bind(this)} />
		    	</div>
			</div>
	     	<div className="Risk-Status">
		      <RiskStatus Severity={this.props.RiskData.severity} onRiskStatusChange={this.onRiskStatusChange.bind(this)}/>
		    </div>
    	</div>
      </div>
    );
  }

  //onChangeMethods
  riskNameOnChange(event) {
	var newName = event.target.value;
	this.props.onRiskNameChange(this.props.RiskData.id, newName);
  }

  riskDescriptionOnChange(event) {
	var newDescription = event.target.value;
	this.props.onRiskDescriptionChange(this.props.RiskData.id, newDescription);
  }

  onRiskStatusChange(newSeverity) {
    this.props.onRiskStatusChange(this.props.RiskData.id, newSeverity);
  }

}

export default Risk;
