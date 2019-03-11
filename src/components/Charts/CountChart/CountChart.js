import React, { Component } from 'react';
import './CountChart.scss';
import { Doughnut } from 'react-chartjs-2';

class CountChart extends Component {
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
			dataArray = [ ...dataArray, item.totalFunds ];
		});
		return dataArray;
	};

	hasEntries = () => {
		for (const operation of this.props.data) {
			if (operation.totalFunds) return true;
		}

		return false;
	}

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
				<h2>{this.props.title}</h2>
				{ this.hasEntries() ? (<Doughnut data={this.data} />) : (<h2>No data</h2>) }	
			</div>
		);
	}
}

export default CountChart;
