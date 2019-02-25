import React, { Component } from 'react';
import './TransferModal.scss';
import { Modal, Button, Select } from 'antd';
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

	saveFunds = (value) => {
		this.setState({ funds: value });
		console.log(this.state.funds);
	};

	saveGoalTitleID = (title, id) => {
		this.setState({ goalTitle: title, goalId: id });
		console.log(`Title: ${this.state.goalTitle}, ID: ${this.state.goalId}`);
	};

	transferFunds = (funds) =>{
		this.props.transferToGoal(funds);
		this.props.onCancel();

	}
	render() {
		const { loading } = this.state;
		const Option = Select.Option;

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
						<Button
							key="submit"
							type="primary"
							loading={loading}
							onClick={() => this.transferFunds({id: this.state.goalId, funds: this.state.funds})}
						>
							Przelej
						</Button>
					]}
				>
					<p>Podaj kwotę</p>
					<NumericInput
						className="numeric-input"
						onChange={(value) => this.saveFunds(value)}
						min={1}
						max={this.props.balance}
						size={30}
						value={this.state.funds}
					/>
					<p>Wybierz cel</p>
					<Select className="category-select" defaultValue="Wybierz cel">
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
	// addCreditsToStore: (payload) => dispatch(addCredits(payload)),
	// withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload))
	transferToGoal: (payload) => dispatch(transferToGoal(payload))
});

const mapStateToProps = (state) => ({
	balance: getBalanceSelector(state),
	goals: getGoalsSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferModal);
