import React, { Component } from 'react';
import { Modal, Input, Button } from 'antd';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';
import { addGoal } from '../../../store/actions/goalsAction';

class AddGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goalTitle: '',
			goalFunds: null
		};
	}

	saveGoalTitle = (e) => {
		this.setState({ goalTitle: e.target.value });
		console.log(this.state.goalTitle);
	};

	saveGoalFunds = (value) => {
		this.setState({ goalFunds: value });
		console.log(this.state.goalFunds);
	};

	addGoal = () => {
		this.props.addGoal({ goalTitle: this.state.goalTitle, fundsNeeded: this.state.goalFunds});
		this.setState({ goalTitle: '', goalFunds: null });
		this.props.onCancel();
	};

	render() {
		const { loading } = this.state;
		return (
			<div className="AddGoalModal">
				<Modal
					title="Dodaj nowy cel"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={() => this.addGoal()}>
							Dodaj cel
						</Button>
					]}
				>
					<div>
						<p>Podaj nazwe celu</p>
						<Input onChange={this.saveGoalTitle} value={this.state.goalTitle} />
					</div>
					<div>
						<p>Podaj sumę na osiągnięcie celu:</p>
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
