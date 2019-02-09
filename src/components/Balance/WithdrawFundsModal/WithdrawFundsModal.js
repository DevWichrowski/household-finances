import React, { Component } from 'react'
import './WithdrawFundsModal.scss'
import { Modal, Button, Input, message } from 'antd';
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

	saveFundsToState = (e) => {
		this.setState({ funds: e.target.value });
	};

	clearState = () =>{
		this.setState({funds: null});
	}

	render() {
		const { loading } = this.state;
		const successMessage = () => message.success(`Pomyślnie wypłacono ${this.state.funds} zł z konta głównego`);
		const errorMessage = () => message.error(`Błąd: Nie odpowiednia kwota [${this.state.funds} zł]`);

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
								if (this.state.funds > 0) {
									this.props.withdrawCredits(parseFloat(this.state.funds));
									this.props.onCancel();
									successMessage();
									this.clearState();
								} else {
									errorMessage();
								}
							}}
						>
							Dodaj
						</Button>
					]}
				>
					<p>Poniżej podaj kwotę do wypłaty</p>
					<Input onChange={this.saveFundsToState} value={this.state.funds}/>
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    addCreditsToStore: (payload) => dispatch(addCredits(payload)),
    withdrawCredits: (payload) => dispatch(withdrawCredits(payload))
});

export default connect(null, mapDispatchToProps)(WithdrawFundsModal);
