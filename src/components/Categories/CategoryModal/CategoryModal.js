import React, { Component } from 'react';
import { Modal, Button, Radio } from 'antd';

export default class CategoryModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			category: '',
			categoryType: 'addCategory'
		};
	}

	switchToAddCategory = () => {
		this.setState({ categoryType: 'addCategory' });
		console.log('Switchted to: [add category]');
	};

	switchToWithdrawCategory = () => {
		this.setState({ categoryType: 'withdrawCategory' });
		console.log('Switchted to: [withdraw category]');
	};

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
				>
					<Radio.Group defaultValue="addCategory" buttonStyle="solid">
						<Radio.Button value="addCategory" onClick={this.switchToAddCategory}>
							Nowa kategoria wpłaty
						</Radio.Button>
						<Radio.Button value="withdrawCategory" onClick={this.switchToWithdrawCategory}>
							Nowa kategoria wypłaty
						</Radio.Button>
					</Radio.Group>
				</Modal>
			</div>
		);
	}
}
