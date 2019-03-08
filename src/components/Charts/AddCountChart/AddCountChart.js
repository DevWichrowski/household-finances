import React, { Component } from 'react';
import './AddCountChart.scss';
import { Doughnut } from 'react-chartjs-2';


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

	generateChartColor = (arr) => {
		const chartsColor = [];
		arr.map((category) => {
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
		labels: this.props.labels,
		datasets: [
			{
				data: this.getTotalCount(this.props.data),
				backgroundColor: this.generateChartColor(this.props.labels),
				hoverBackgroundColor: [ this.generateChartColor(this.props.labels) ]
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

export default AddCountChart;