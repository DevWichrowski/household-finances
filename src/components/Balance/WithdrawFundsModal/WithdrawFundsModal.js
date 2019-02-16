import React, { Component } from 'react';
import './WithdrawFundsModal.scss';
import '../../../styles/styles.scss';
import { Modal, Button, message, Select } from 'antd';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../../store/actions/balanceAction';
import NumericInput from 'react-numeric-input';
import { getBalanceSelector, getWithdrawSelector } from '../../../store/selectors/balance.selectors';

class WithdrawFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null,
			category: 'Bez kategorii'
		};
	}

	saveCategoryToState = (value) => {
		this.setState({ category: value });
		console.log(`Kategoria wypłaty: ${value}`);
	};

	saveFundsToState = (value) => {
		this.setState({
			funds: value
		});
	};

	clearState = () => {
		this.setState({
			funds: null
		});
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
		const Option = Select.Option;

		return (
			<div className="WithdrawFundsModal">
				<Modal
					visible={this.props.visible}
					title="Wypłać z konta"
					onOk={this.handleOk}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij{' '}
						</Button>,
						<Button
							key="submit"
							type="primary"
							loading={loading}
							onClick={() => {
								console.log(this.state.funds);
								if (this.state.funds <= this.props.balance) {
									if (this.state.funds > 0) {
										this.props.withdrawCredits({
											funds: this.state.funds,
											category: this.state.category
										});
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
							Wypłać{' '}
						</Button>
					]}
				>
					<p> Poniżej podaj kwotę do wypłaty </p>
					<NumericInput
						className="numeric-input"
						onChange={(value) => this.saveFundsToState(value)}
						min={1}
						size={30}
						value={this.state.funds}
					/>
					<p> Wybierz kategorie </p>
					<Select
						className="category-select"
						defaultValue="Bez kategorii"
						onChange={this.saveCategoryToState}
					>
						{this.props.withdrawCategories.map((item, index) => {
							return (
								<Option key={index} value={item}>
									{item}
								</Option>
							);
						})}
					</Select>
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
	balance: getBalanceSelector(state),
	withdrawCategories: getWithdrawSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawFundsModal);
