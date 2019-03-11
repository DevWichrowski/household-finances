import React, { Component } from 'react';
import './TransferModal.scss';
import { Modal, Button, Select, message } from 'antd';
import { getBalanceSelector } from '../../../store/selectors/balance.selectors';
import { connect } from 'react-redux';
import NumericInput from 'react-numeric-input';
import { getGoalsSelector } from '../../../store/selectors/goals.selector';
import { transferToGoal } from '../../../store/actions/balanceAction';

class TransferModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			funds: null,
			goalTitle: null,
			goalId: null
		};
	}

	saveFunds = (value) => this.setState({ funds: value });

	saveGoalTitleID = (title, id) => this.setState({ goalTitle: title, goalId: id });

	transferFunds = () => {
		this.props.goals.map((goal) => {
			if (goal.id === this.state.goalId) {
				if (goal.fundsNeeded - goal.currentFunds < this.state.funds) {
					message.error('Error: You want to transfer more than is needed to reach goal.');
					return;
				}
				if (this.state.funds <= this.props.balance && this.state.goalTitle !== null) {
					this.props.transferToGoal({
						id: this.state.goalId,
						funds: this.state.funds,
						category: this.state.goalTitle
					});
					this.props.onCancel();
					message.success(`Succesfully transfered [${this.state.funds}$] to goal [${this.state.goalTitle}]`);
				} else {
					message.error(`Error: Failed to transfer [${this.state.funds}$] to goal [${this.state.goalTitle}]`);
				}
			}
		});
	};

	render() {
		const { loading } = this.state;
		const Option = Select.Option;

		return (
			<div className="TransferModal">
				<Modal
					className="transfer-funds-modal"
					title="Transfer to the goal"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Close
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={() => this.transferFunds()}>
							Transfer
						</Button>
					]}
				>
					<p>Enter the amount</p>
					<NumericInput
						className="numeric-input"
						onChange={(value) => this.saveFunds(value)}
						min={1}
						max={this.props.balance}
						size={30}
						value={this.state.funds}
					/>
					<p>Wybierz cel</p>
					<Select className="category-select" defaultValue="Choose a goal">
						{this.props.goals.map((item, index) => {
							return (
								<Option key={index} onClick={() => this.saveGoalTitleID(item.goalTitle, item.id)}>
									{item.goalTitle}
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
	transferToGoal: (payload) => dispatch(transferToGoal(payload))
});

const mapStateToProps = (state) => ({
	balance: getBalanceSelector(state),
	goals: getGoalsSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferModal);
