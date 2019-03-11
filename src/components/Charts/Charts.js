import React, { Component } from 'react';
import './Charts.scss';
import OperationCountChart from './OperationCountChart/OperationCountChart';
import CountChart from './CountChart/CountChart';
import {
	getOperationsSelector,
	getAddCategoriesSelector,
	getAddCategoriesCout,
	getWithdrawSelector,
	getWithdrawCategoriesCout
} from '../../store/selectors/balance.selectors';
import {
	getGoalsSelector,
	getTransferTotalCount,
	getTransferTotalCountTitles
} from '../../store/selectors/goals.selector';
import { connect } from 'react-redux';

class Charts extends Component {
	constructor(props) {
		super(props);
	}

	countAllOperation = () => {
		let addOperations = null;
		let withdrawOperations = null;
		let transferOperations = null;

		this.props.addTotalFunds.map((item) => (addOperations += item.totalFunds));

		this.props.withdrawTotalFunds.map((item) => (withdrawOperations += item.totalFunds));

		this.props.getGoalsTotalFunds.map((item) => (transferOperations += item.totalFunds));

		let allOperations = [
			{ totalFunds: addOperations },
			{ totalFunds: withdrawOperations },
			{ totalFunds: transferOperations }
		];

		return allOperations;
	};

	isVisible = (data) => {
		for (const operation of data) {
			if (!!operation.totalFunds) return true;
		}

		return false;
	};

	render() {
		return (
			<div className="charts">
				<OperationCountChart className="chart" />
				<CountChart
					labels={[ 'Income', 'Withdraw', 'Transfer to goal' ]}
					data={this.countAllOperation()}
					title={'The sum of all operations'}
					className="chart"
				/>
				<CountChart
					labels={this.props.withdrawCategories}
					data={this.props.withdrawTotalFunds}
					title={'Funds withdrawals'}
					className="chart"
				/>
				<CountChart
					labels={[ this.props.goalTitles ]}
					data={this.props.getGoalsTotalFunds}
					title={'Transfers to the goals'}
					className="chart"
				/>
				<CountChart 
					labels={this.props.addCategories} 
					data={this.props.addTotalFunds} 
					title={'Funds income'} 
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state),
	goals: getGoalsSelector(state),
	addCategories: getAddCategoriesSelector(state),
	addTotalFunds: getAddCategoriesCout(state),
	withdrawCategories: getWithdrawSelector(state),
	withdrawTotalFunds: getWithdrawCategoriesCout(state),
	getGoalsTotalFunds: getTransferTotalCount(state),
	goalTitles: getTransferTotalCountTitles(state)
});

export default connect(mapStateToProps, null)(Charts);
