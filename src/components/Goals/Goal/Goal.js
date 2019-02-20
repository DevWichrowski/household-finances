import React, { Component } from 'react';
import { Progress } from 'antd';

export default class Goal extends Component {
	render() {
		return (
			<div className="Goal">
                    <h2>Na motocykl</h2>
                    <h3>100/ 1000</h3>
				<Progress percent={10.3} status="exception" />
			</div>
		);
	}
}
