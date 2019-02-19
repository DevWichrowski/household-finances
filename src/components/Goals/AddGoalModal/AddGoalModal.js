import React, { Component } from 'react';
import { Modal, Input } from 'antd';

export default class AddGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
            goalTitle: '',
            goalFunds: null,
        };
	}

	render() {
		return (
			<div className="AddGoalModal">
				<Modal title="Dodaj nowy cel" visible={this.props.visible} onCancel={this.props.onCancel}>
					<div >
						<p>Podaj nazwe celu</p>
						<Input />
					</div>
					<div>
						<p>Podaj sumę na osiągnięcie celu:</p>
						<Input />
					</div>
				</Modal>
			</div>
		);
	}
}
