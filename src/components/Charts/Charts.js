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
	render() {
		return (
			<div className="Charts">
				<OperationCountChart />
				<CountChart
					labels={this.props.addCategories}
					data={this.props.addTotalFunds}
					title={'Wykres wpłat kategorii'}
				/>
				<CountChart
					labels={this.props.withdrawCategories}
					data={this.props.withdrawTotalFunds}
					title={'Wykres wypłat kategorii'}
				/>
				<CountChart
					labels={this.props.goalTitles}
					data={this.props.getGoalsTotalFunds}
					title={'Wykres przelewów na wpłaty'}
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
