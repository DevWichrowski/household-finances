import React, { Component } from 'react';
import './Charts.scss';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { getBalanceSelector, getOperationsSelector } from '../../store/selectors/balance.selectors';
import { getGoalsSelector } from '../../store/selectors/goals.selector';

class Charts extends Component {
	constructor(props) {
		super(props);
	}

	countOperations = (type) => {
		const operations = [];
		this.props.operations.map((operation) => {
			if (operation.operationType == type) {
				operations.push(operation);
			}
		});
		console.log(operations);
		return operations.length;
	};

	data = {
		labels: [ 'Wpłata', 'Wypłata', 'Przelew na cel' ],
		datasets: [
			{
				data: [ this.countOperations('addOperation'), this.countOperations('withdrawOperation'), this.countOperations('transferOperation') ],
				backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
				hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
			}
		]
	};

	render() {
		return (
			<div className="Charts">
				<h1>Charts</h1>
				<Pie data={this.data} />
				<button onClick={this.countAddOperations}>click me</button>
        {console.log(this.props.operations)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state),
	goals: getGoalsSelector(state)
});

export default connect(mapStateToProps, null)(Charts);
