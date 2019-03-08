import React, { Component } from 'react';
import './AddCountChart.scss';
import { Doughnut } from 'react-chartjs-2';
import {
	getOperationsSelector,
	getAddCategoriesSelector,
	getAddCategoriesCout
} from '../../../store/selectors/balance.selectors';
import { getGoalsSelector } from '../../../store/selectors/goals.selector';
import { connect } from 'react-redux';

class AddCountChart extends Component {
	constructor(props) {
		super(props);
	}

	getRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	generateChartColor = () => {
		const chartsColor = [];
		this.props.addCategories.map((category) => {
			chartsColor.push(this.getRandomColor());
		});
		return chartsColor;
	};

	getTotalCount = (array) => {
		let dataArray = [];
		array.map((item) => {
			dataArray = [...dataArray, item.totalFunds]
		});
		return dataArray;
	};

	data = {
		labels: this.props.addCategories,
		datasets: [
			{
				data: this.getTotalCount(this.props.addTotalFunds),
				backgroundColor: this.generateChartColor(),
				hoverBackgroundColor: [ this.generateChartColor() ]
			}
		]
	};

	render() {
		return (
			<div className="AddCountCharts">
				<h2>Wykres kategorii wpłat</h2>
				<Doughnut data={this.data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state),
	goals: getGoalsSelector(state),
	addCategories: getAddCategoriesSelector(state),
	addTotalFunds: getAddCategoriesCout(state)
});

export default connect(mapStateToProps, null)(AddCountChart);
