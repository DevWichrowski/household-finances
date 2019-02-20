import React, { Component } from 'react';
import { Progress } from 'antd';
import './Goal.scss';

export default class Goal extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="Goal">
                    <h2 onClick={this.props.deleteGoal}>{this.props.title}</h2>
                    <h3>{this.props.currentFunds} / {this.props.fundsToSuccess}</h3>
				<Progress percent={30} status="active" />
			</div>
		);
	}
}
