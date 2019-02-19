import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Goals.scss';
import { Button } from 'antd';
import AddGoalModal from './AddGoalModal/AddGoalModal';

class Goals extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
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
				<h1>Goals</h1>

				<Button className="add-goal-button" type="primary" size={'large'} onClick={this.showModal}>
					Dodaj cel
				</Button>
                <AddGoalModal visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
