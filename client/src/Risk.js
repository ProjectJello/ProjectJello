import React, { Component } from 'react';
import './Risk.css';
import RiskStatus from './RiskStatus.js';

class Risk extends Component {
  render() {
    return (
      <div className="Risk">
 		<div className="Risk-Row">
	      	<div className="Risk-Name-Description flex-fill">
			    <div className="Risk-Name">
			        <h3>{this.props.RiskData.name}</h3>
			    </div>
			    <div className="Risk-Description">
			    	<span>{this.props.RiskData.description}</span>
		    	</div>
			</div>
	     	<div className="Risk-Status">
		      <RiskStatus Severity={this.props.RiskData.severity} />
		    </div>
    	</div>
      </div>
    );
  }
}

export default Risk;