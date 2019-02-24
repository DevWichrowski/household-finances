import React, { Component } from 'react';
import './TransferModal.scss';
import { Modal, Button } from 'antd';

export default class TransferModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};
	}

	render() {
		const { loading } = this.state;
		return (
			<div className="TransferModal">
				<Modal
					title="Przelej na cel"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button key="submit" type="primary" loading={loading}>
							Przelej
						</Button>
					]}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
	}
}
