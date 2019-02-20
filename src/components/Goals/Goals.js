import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Goals.scss';
import { Button } from 'antd';
import AddGoalModal from './AddGoalModal/AddGoalModal';
import Goal from './Goal/Goal';
import { getGoalsSelector } from '../../store/selectors/goals.selector';

class Goals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div className="Goals">
				<h1>Cele</h1>

				<Button className="add-goal-button" type="primary" size={'large'} onClick={this.showModal}>
					Dodaj cel
				</Button>
				<AddGoalModal visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel} />
				{this.props.goals.map((goal, index) => {
					return (
						<div key={index}>
							<Goal title={goal.goalTitle} fundsToSuccess={goal.fundsNeeded}/>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
