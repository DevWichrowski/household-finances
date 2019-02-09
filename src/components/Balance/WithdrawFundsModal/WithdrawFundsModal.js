import React, { Component } from 'react';
import './WithdrawFundsModal.scss';
import { Modal, Button, InputNumber, message } from 'antd';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../../store/actions/balanceAction';

class WithdrawFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null
		};
	}

	saveFundsToState = (value) => {
		this.setState({ funds: value });
	};

	clearState = () => {
		this.setState({ funds: null });
	};

	render() {
		const { loading } = this.state;
		const successMessage = () => {
			message.success(`Pomyślnie wypłacono ${this.state.funds} zł z konta głównego`);
			this.clearState();
		};
		const errorMessage = (text) => {
			message.error(text);
			this.clearState();
		};

		return (
			<div className="WithdrawFundsModal">
				<Modal
					visible={this.props.visible}
					title="Wypłać z konta"
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
								if (this.state.funds <= this.props.balanceInfo.balance) {
									if (this.state.funds > 0) {
										this.props.withdrawCredits(parseFloat(this.state.funds));
										this.props.onCancel();
										successMessage();
									} else {
										errorMessage(`Błąd: Nie odpowiednia kwota [${this.state.funds} zł]`);
									}
								} else {
									errorMessage(`Brak wystarczających środków na koncie.`);
								}
							}}
						>
							Wypłać
						</Button>
					]}
				>
					<p>Poniżej podaj kwotę do wypłaty</p>
					<InputNumber onChange={() => this.saveFundsToState()} value={this.state.funds} size={'large'} />
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload)),
	withdrawCredits: (payload) => dispatch(withdrawCredits(payload))
});

const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawFundsModal);
