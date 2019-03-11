import React, { Component } from 'react';
import { Modal, Input, Button, message } from 'antd';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';
import { addGoal } from '../../../store/actions/goalsAction';
import './AddGoalModal.scss';

class AddGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goalTitle: '',
			goalFunds: null
		};
	}

	saveGoalTitle = (e) => this.setState({ goalTitle: e.target.value });

	saveGoalFunds = (value) => this.setState({ goalFunds: value });

	addGoal = () => {
		if (this.state.goalFunds > 0) {
			this.props.addGoal({ goalTitle: this.state.goalTitle, fundsNeeded: this.state.goalFunds });
			message.success(`Created new goal [${this.state.goalTitle}]`);
			this.setState({ goalTitle: '', goalFunds: null });
			this.props.onCancel();
		} else {
			message.error(`Enter a number greater than 0`);
		}
	};

	render() {
		const { loading } = this.state;
		return (
			<div className="AddGoalModal">
				<Modal
					className="add-goal-modal"
					title="Add new goal"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Close
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={() => this.addGoal()}>
							Add
						</Button>
					]}
				>
					<div>
						<p>Enter name of the goal</p>
						<Input onChange={this.saveGoalTitle} value={this.state.goalTitle} />
					</div>
					<div>
						<p>Enter the funds to reach the goal:</p>
						<NumericInput
							onChange={(value) => this.saveGoalFunds(value)}
							value={this.state.goalFunds}
							min={1}
							size={30}
						/>
					</div>
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addGoal: (payload) => dispatch(addGoal(payload))
});

export default connect(null, mapDispatchToProps)(AddGoalModal);
