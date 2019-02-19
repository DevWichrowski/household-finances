import React, { Component } from 'react';
import { Modal, Input } from 'antd';

export default class AddGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goalTitle: '',
			goalFunds: null
		};
	}

	saveGoalTitle = (e) => {
		this.setState({ goalTitle: e.target.value });
		console.log(this.state.goalTitle);
	};

	saveGoalFunds = (e) => {
		this.setState({ goalFunds: e.target.value });
		console.log(this.state.goalFunds);
	};

	render() {
		return (
			<div className="AddGoalModal">
				<Modal title="Dodaj nowy cel" visible={this.props.visible} onCancel={this.props.onCancel}>
					<div>
						<p>Podaj nazwe celu</p>
						<Input onChange={this.saveGoalTitle} />
					</div>
					<div>
						<p>Podaj sumę na osiągnięcie celu:</p>
						<Input onChange={this.saveGoalFunds} />
					</div>
				</Modal>
			</div>
		);
	}
}
