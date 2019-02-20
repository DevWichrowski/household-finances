import React, { Component } from 'react';
import { Progress } from 'antd';
import './Goal.scss';

export default class Goal extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="Goal">
                    <h2>{this.props.title}</h2>
                    <h3>100/ {this.props.fundsToSuccess}</h3>
				<Progress percent={30} status="active" />
			</div>
		);
	}
}
