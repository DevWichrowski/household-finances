import React, { Component } from 'react';
import './AddCountChart.scss';
import {Doughnut} from 'react-chartjs-2';
import { getOperationsSelector, getAddCategoriesSelector } from '../../../store/selectors/balance.selectors';
import { getGoalsSelector } from '../../../store/selectors/goals.selector';
import { connect } from 'react-redux';

class AddCountChart extends Component {
    constructor(props){
        super(props);

    }

     getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      generateChartColor = () =>{
          const chartsColor = [];
          this.props.addCategories.map((category) =>{
              chartsColor.push(this.getRandomColor())
          });
          return chartsColor;
      }

    generateData = () =>{
        const operations = [];
    }

    data = {
        labels: this.props.addCategories,
        datasets: [{
            data: [300, 50, 100, 500, 400],
            backgroundColor: 
            this.generateChartColor(),
            hoverBackgroundColor: [
                this.generateChartColor()
            ]
        }]
    };


  render() {
    console.log(this.data.labels[0]);
    console.log(this.getRandomColor());
    return (
      <div className="AddCountCharts">
        <h2>Doughnut Example</h2>
        <Doughnut data={this.data} />
        <button onClick={() => this.getCategory()}> Click me </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state),
    goals: getGoalsSelector(state),
    addCategories: getAddCategoriesSelector(state)
});

export default connect(mapStateToProps, null)(AddCountChart);