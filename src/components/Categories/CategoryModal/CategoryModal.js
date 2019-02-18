import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class CategoryModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};
	}

	render() {
		const { loading } = this.state;

		return (
			<div className="CategoryModal">
				<Modal
					title="Dodaj nową kategorię"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					onOk={this.handleOk}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button key="submit" type="primary" loading={loading}>
							Dodaj
						</Button>
					]}
				/>
			</div>
		);
	}
}
