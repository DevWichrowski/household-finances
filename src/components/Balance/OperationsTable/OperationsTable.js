import React, { Component } from 'react';
import './OperationsTable.scss';
import { Table, Tag, Button } from 'antd';
import { connect } from 'react-redux';

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

	onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

	render() {
		const { loading, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange
		};
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
						text = 'Wpłata';
						color = 'green';
					} else {
						text = 'Wypłata';
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
				title: 'Kategoria',
				dataIndex: 'Kategoria',
				key: 'Kategoria'
			},
			{
				title: 'Data operacji',
				dataIndex: 'operationDate',
				key: 'operationDate'
			},
			{
				title: 'Kwota [zł]',
				dataIndex: `funds`,
				key: `funds`
			}
		];

		return (
			<div className="OperationsTable">
				<span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
				<Table
					dataSource={this.props.balanceInfo.operations}
					columns={columns}
					description={'brak danych'}
					pagination={{ pageSize: 5 }}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, null)(OperationsTable);
