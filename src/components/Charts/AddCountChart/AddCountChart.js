import React, { Component } from 'react';
import './AddCountChart.scss';
import { Doughnut } from 'react-chartjs-2';
import { getOperationsSelector, getAddCategoriesSelector } from '../../../store/selectors/balance.selectors';
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

	generateData = () => {
		let result = this.props.operations.reduce((acc, val) => {
			let operations = acc
				.filter((obj) => {
					return obj.category === val.category;
				})
				.pop() || { category: val.category, funds: 0 };

			operations.funds += val.funds;
			acc.push(operations);
			return acc.filter((item, i, a) => {
				return i === a.indexOf(item);
			});
		}, []);
		console.log(result);
		return result;
	};

	generateDataChart = () => {
		const data = this.generateData();
		const newData = [];
		data.map((item) => {
			newData.push(item.funds);
		});
		console.log(newData);
		return newData;
	};

	data = {
		labels: this.props.addCategories,
		datasets: [
			{
				data: this.generateDataChart(),
				backgroundColor: this.generateChartColor(),
				hoverBackgroundColor: [ this.generateChartColor() ]
			}
		]
	};

	render() {
		this.generateData();
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
	addCategories: getAddCategoriesSelector(state)
});

export default connect(mapStateToProps, null)(AddCountChart);
