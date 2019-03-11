import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Goals.scss';
import { Button, message } from 'antd';
import AddGoalModal from './AddGoalModal/AddGoalModal';
import Goal from './Goal/Goal';
import { getGoalsSelector } from '../../store/selectors/goals.selector';
import { deleteGoal } from '../../store/actions/goalsAction';

class Goals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};
	}

	showModal = () => this.setState({ visible: true });

	handleCancel = (e) => this.setState({ visible: false });

	deleteGoal = (id, title) => {
		this.props.deleteGoal(id);
		message.success(`Deleted goal: [${title}]`);
	};

	render() {
		return (
			<div className="Goals">
				<h1>Goals</h1>

				<Button className="add-goal-button" type="primary" size={'large'} onClick={this.showModal}>
					Add goal
				</Button>
				<AddGoalModal visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel} />
				{this.props.goals.map((goal, index) => {
					return (
						<div key={index}>
							<Goal
								id={goal.id}
								title={goal.goalTitle}
								fundsToSuccess={goal.fundsNeeded}
								currentFunds={goal.currentFunds}
								deleteGoal={() => this.deleteGoal(goal.id, goal.goalTitle)}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	goals: getGoalsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
	deleteGoal: (payload) => dispatch(deleteGoal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
