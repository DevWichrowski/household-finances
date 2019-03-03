import React, { Component } from 'react';
import './Charts.scss';
import OperationCountChart from './OperationCountChart/OperationCountChart';
import AddCountChart from './AddCountChart/AddCountChart';

class Charts extends Component {

	render() {
		return (
			<div className="Charts">
			<OperationCountChart />
			<AddCountChart />
			</div>
		);
	}
}

export default Charts;
