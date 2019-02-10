import React, { Component } from 'react';
import './OperationsTable.scss';
import { Table, Divider, Tag } from 'antd';

export default class OperationsTable extends Component {
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
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: 'Kwota',
				dataIndex: 'age',
				key: 'age'
			},
			{
				title: 'Kategoria',
				dataIndex: 'address',
				key: 'address'
			},
			{
				title: 'Data',
				dataIndex: 'Data',
				key: 'Data'
			}
		];

		return (
			<div className="OperationsTable">
				<Table dataSource={dataSource} columns={columns} />
			</div>
		);
	}
}
