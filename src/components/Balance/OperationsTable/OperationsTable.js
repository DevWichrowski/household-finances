import React, { Component } from 'react';
import './OperationsTable.scss';

export default class OperationsTable extends Component {
	render() {
		return (
			<div className="OperationsTable">
				<h2>Historia operacji</h2>
				<table>
					<tr>
						<th>Typ</th>
						<th>Kategoria</th>
						<th>Kwota</th>
						<th>Data</th>
					</tr>
					<tr>
						<td>Wypłata</td>
						<td>Glupoty</td>
						<td>100</td>
						<td>12.10.2018</td>
					</tr>
					<tr>
						<td>Wplata</td>
						<td>Pensja</td>
						<td>3000</td>
						<td>2.10.2018</td>
					</tr>
				</table>
			</div>
		);
	}
}
