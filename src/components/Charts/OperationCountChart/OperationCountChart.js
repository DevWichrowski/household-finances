import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { getOperationsSelector } from '../../../store/selectors/balance.selectors';
import { getGoalsSelector } from '../../../store/selectors/goals.selector';
import './OperationCountChart.scss';

class OperationCountChart extends Component {
	constructor(props) {
		super(props);
	}

	countOperations = (type) => {
		const operations = [];
		this.props.operations.map((operation) => {
			if (operation.operationType === type) {
				operations.push(operation);
			}
		});
		return operations.length;
	};

	data = {
		labels: [ 'Wpłata', 'Wypłata', 'Przelew na cel' ],
		datasets: [
			{
				data: [
					this.countOperations('addOperation'),
					this.countOperations('withdrawOperation'),
					this.countOperations('transferOperation')
				],
				backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
				hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
			}
		]
	};

	render() {
		return (
			<div className="OperationCountChart">
				<h2>Ilość wykonanych operacji</h2>
				<Pie data={this.data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state),
	goals: getGoalsSelector(state)
});

export default connect(mapStateToProps, null)(OperationCountChart);
