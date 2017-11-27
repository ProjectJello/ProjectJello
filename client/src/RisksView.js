import React, { Component } from 'react';
import './RisksView.css';
import Risk from './Risk.js';
import ProjectPlus from './assets/BluePlus.svg';

class RisksView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RisksView">
        <span className="RiskTitle"><b>Risks</b></span>
        <a href="#" className="Add-Project-Icon"> <img src={ProjectPlus} alt="Plus" id="WhitePlus" /> </a>
      	<div className="RisksTable">
          {this.props.RisksData.map((item, index) => (
              <Risk RiskData={item} />
            ))}
        </div>
      </div>
    );
  }
}

export default RisksView;