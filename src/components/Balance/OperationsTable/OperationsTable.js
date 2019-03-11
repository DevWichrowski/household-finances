import React, { Component } from 'react';
import './OperationsTable.scss';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';
import { getOperationsSelector } from '../../../store/selectors/balance.selectors';

class OperationsTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedRowKeys: [],
			loading: false
		};
	}

	start = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false
			});
		}, 1000);
	};

	onSelectChange = (selectedRowKeys) => this.setState({ selectedRowKeys });

	render() {
		const { selectedRowKeys } = this.state;
		const hasSelected = selectedRowKeys.length > 0;

		const columns = [
			{
				title: 'Typ',
				dataIndex: 'operationType',
				key: 'operationType',
				render: (operationType) => {
					let color = 'blue';
					let text = null;
					if (operationType === 'addOperation') {
						text = 'Income';
						color = 'green';
					} else if (operationType === 'transferOperation') {
						text = 'To goal';
						color = 'blue';
					} else {
						text = 'Withdraw';
						color = 'volcano';
					}
					return (
						<Tag color={color} key={operationType}>
							{text.toUpperCase()}
						</Tag>
					);
				}
			},
			{
				title: 'Category',
				dataIndex: 'category',
				key: 'category'
			},
			{
				title: 'Date of operation',
				dataIndex: 'operationDate',
				key: 'operationDate'
			},
			{
				title: 'Amount [$]',
				dataIndex: `funds`,
				key: `funds`
			}
		];

		return (
			<div className="OperationsTable">
				<span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
				<Table
					rowKey={'id'}
					dataSource={this.props.operations}
					columns={columns}
					description={'No data'}
					pagination={{ pageSize: 5 }}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	operations: getOperationsSelector(state)
});

export default connect(mapStateToProps, null)(OperationsTable);
