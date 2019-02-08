import React, { Component } from 'react';
import './AddFundsModal.scss';
import { Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../../store/actions/balanceAction';

class AddFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null,
		};
	}
	render() {
		const { visible, loading } = this.state;
		return (
			<div className="AddFundsModal">
				<Modal
					visible={this.props.visible}
					title="Dodaj kwotę"
					onOk={this.handleOk}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.props.handleOk}>
							Dodaj
						</Button>
					]}
				>	
					<p>Poniżej podaj kwotę do wpłaty</p>
					<Input />
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload)),
	withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload))
});

export default connect(null, mapDispatchToProps)(AddFundsModal);
