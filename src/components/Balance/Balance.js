import React, { Component } from 'react';
import './Balance.scss';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../store/actions/balanceAction';
import { Button } from 'antd';
import Saldo from './Saldo/Saldo';
import OperationsModal from './OperationsModal/OperationsModal';
import AddFundsModal from './AddFundsModal/AddFundsModal';

class Balance extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			visible: false,
			addFundsVisible: false,
		 };
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	showAddFundsModal = () => {
		this.setState({
			addFundsVisible: true,
			visible: false
		});
		console.log('showAddModal');
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
			addFundsVisible: false
		});
	};

	render() {
		return (
			<div className="Balance">
				<div className="balance-container">
					<Saldo end={this.props.balanceInfo.balance} />

					{/*<button onClick={() => this.props.addCredits(100)}> dodaj</button>*/}
					{/*<button onClick={() => this.props.withdrawCredits(100)}> odejmij</button>*/}
					{/*<button disabled> Przelej na cel</button>*/}
				</div>
				<OperationsModal visible={this.state.visible} onCancel={this.handleCancel} showAddModal={() => this.showAddFundsModal()} />
				<AddFundsModal visible={this.state.addFundsVisible} onCancel={this.handleCancel} />
				<Button className="operations-button" type="primary" size={'large'} onClick={this.showModal}>
					{' '}
					Operacje{' '}
				</Button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload)),
	withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload))
});

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo,
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
