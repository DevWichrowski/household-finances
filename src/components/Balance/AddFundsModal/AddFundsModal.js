import React, { Component } from 'react';
import './AddFundsModal.scss';
import { Modal, Button, Input, message } from 'antd';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../../store/actions/balanceAction';

class AddFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null
		};
	}

	saveFundsToState = (e) => {
		this.setState({ funds: e.target.value });
	};

	render() {
		const { visible, loading } = this.state;
		const successMessage = () => message.success(`Pomyślnie dodane ${this.state.funds} zł do konta głównego`);

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
						<Button
							key="submit"
							type="primary"
							loading={loading}
							onClick={() => {
								this.props.addCreditsToStore(parseFloat(this.state.funds));
								this.props.onCancel();
								successMessage()
							}}
						>
							Dodaj
						</Button>
					]}
				>
					<p>Poniżej podaj kwotę do wpłaty</p>
					<Input onChange={this.saveFundsToState} />
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload))
});

export default connect(null, mapDispatchToProps)(AddFundsModal);
