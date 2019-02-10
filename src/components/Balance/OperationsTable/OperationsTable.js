import React, { Component } from 'react';
import './OperationsTable.scss';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';

class OperationsTable extends Component {
	render() {
		const dataSource = [
			{
				key: '1',
				name: 'Mike',
				age: 32,
				address: '10 Downing Street'
			},
			{
				key: '2',
				name: 'John',
				age: 42,
				address: '10 Downing Street'
			}
		];

		const columns = [
			{
				title: 'Typ',
				dataIndex: 'funds',
				key: 'funds'
			},
			{
				title: 'Kategoria',
				dataIndex: 'Kategoria',
				key: 'Kategoria'
			},
			{
				title: 'Data',
				dataIndex: 'operationDate',
				key: 'operationDate'
			},
			{
				title: 'Kwota',
				dataIndex: `funds`,
				key: `funds`,				
			}
		];

		return (
			<div className="OperationsTable">
				<Table dataSource={this.props.balanceInfo.operations} columns={columns} />
			</div>
		);
	}
}

// const mapDispatchToProps = (dispatch) => ({
// 	addCreditsToStore: (payload) => dispatch(addCredits(payload)),
// 	withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload))
// });

const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, null)(OperationsTable);