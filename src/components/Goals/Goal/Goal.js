import React, { Component } from 'react';
import { Progress, Icon, Button } from 'antd';
import './Goal.scss';

export default class Goal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Goal">
				<h2>
					{this.props.title}{' '}
					<Button className="goal-delete-button" type="danger" size={'small'} onClick={this.props.deleteGoal}>
						<Icon type="delete" />
					</Button>
				</h2>
				<h3>
					{this.props.currentFunds} / {this.props.fundsToSuccess}
				</h3>
				<Progress percent={30} status="active" />
			</div>
		);
	}
}
