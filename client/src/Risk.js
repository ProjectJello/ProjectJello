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
			    	<ContentEditable html={this.props.RiskData.name} onChange={this.taskNameOnChange.bind(this)} />
			    </div>
			    <div className="Risk-Description">
			    	<ContentEditable html={this.props.RiskData.description} onChange={this.taskDescriptionOnChange.bind(this)} />
		    	</div>
			</div>
	     	<div className="Risk-Status">
		      <RiskStatus Severity={this.props.RiskData.severity} />
		    </div>
    	</div>
      </div>
    );
  }

  //onChangeMethods
  taskNameOnChange(event) {
	var newName = event.target.value;

	alert(newName);
  }

  taskDescriptionOnChange(event) {
	var newName = event.target.value;

	alert(newName);
  }

}

export default Risk;