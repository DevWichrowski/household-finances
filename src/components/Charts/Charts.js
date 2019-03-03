import React, { Component } from 'react';
import './Charts.scss';
import OperationCountChart from './OperationCountChart/OperationCountChart';

class Charts extends Component {

	render() {
		return (
			<div className="Charts">
			<OperationCountChart />
			</div>
		);
	}
}

export default Charts;
