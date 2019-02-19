import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Goals.scss';
import { Button } from 'antd';

class Goals extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="Goals">
				<h1>Goals</h1>

				<Button className="add-goal-button" type="primary" size={'large'}>
					Dodaj cel
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
