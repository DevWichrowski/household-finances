import React, { Component } from 'react';
import '../../../styles/styles.scss';
import { Modal, Button, message, Select } from 'antd';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../../store/actions/balanceAction';
import NumericInput from 'react-numeric-input';
import { getBalanceSelector, getWithdrawSelector } from '../../../store/selectors/balance.selectors';
import './WithdrawFundsModal.scss';

class WithdrawFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null,
			category: 'No category'
		};
	}

	saveCategoryToState = (value) => this.setState({ category: value });

	saveFundsToState = (value) => this.setState({ funds: value });

	clearState = () => this.setState({ funds: null });

	withdrawFunds = () => {
		if (this.state.funds <= this.props.balance) {
			if (this.state.funds > 0) {
				this.props.withdrawCredits({
					funds: this.state.funds,
					category: this.state.category
				});
				this.props.onCancel();
				this.successMessage();
			} else {
				this.errorMessage(`Error: Incorrect amount [${this.state.funds}$]`);
			}
		} else {
			this.errorMessage(`There are not enough funds on the account.`);
		}
	};

	successMessage = () => {
		message.success(`Succesfully withdrawn ${this.state.funds}$ from the account`);
		this.clearState();
	};

	errorMessage = (text) => {
		message.error(text);
		this.clearState();
	};

	render() {
		const { loading } = this.state;

		const Option = Select.Option;

		return (
			<div className="WithdrawFundsModal">
				<Modal
					className="withdraw-funds-modal"
					visible={this.props.visible}
					title="Withdraw from account"
					onOk={this.handleOk}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Close
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.withdrawFunds}>
							Withdraw
						</Button>
					]}
				>
					<p>Enter the amount to be withdrawn</p>
					<NumericInput
						className="numeric-input"
						onChange={(value) => this.saveFundsToState(value)}
						min={1}
						size={30}
						value={this.state.funds}
					/>
					<p> Choose category </p>
					<Select className="category-select" defaultValue="No category" onChange={this.saveCategoryToState}>
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
