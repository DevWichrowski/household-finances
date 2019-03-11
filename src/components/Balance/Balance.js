import React, { Component } from 'react';
import './Balance.scss';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits } from '../../store/actions/balanceAction';
import { Button } from 'antd';
import Saldo from './Saldo/Saldo';
import OperationsModal from './OperationsModal/OperationsModal';
import AddFundsModal from './AddFundsModal/AddFundsModal';
import WithdrawFundsModal from './WithdrawFundsModal/WithdrawFundsModal';
import OperationsTable from './OperationsTable/OperationsTable';
import { getBalanceSelector } from '../../store/selectors/balance.selectors';
import TransferModal from './TransferModal/TransferModal';

class Balance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			addFundsVisible: false,
			withdrawFundsVisible: false,
			transferModalVisible: false
		};
	}

	showModal = () => this.setState({ visible: true });

	showAddFundsModal = () => {
		this.setState({
			addFundsVisible: true,
			visible: false
		});
	};

	showWithdrawFundsModal = () => {
		this.setState({
			withdrawFundsVisible: true,
			visible: false
		});
	};

	showTransferModal = () => {
		this.setState({
			transferModalVisible: true,
			visible: false
		});
	};

	handleCancel = (e) => {
		this.setState({
			visible: false,
			addFundsVisible: false,
			withdrawFundsVisible: false,
			transferModalVisible: false
		});
	};

	render() {
		return (
			<div className="Balance">
				<div className="balance-container">
					<Saldo end={this.props.balance} />
				</div>
				<OperationsTable />
				<OperationsModal
					visible={this.state.visible}
					onCancel={this.handleCancel}
					showAddModal={() => this.showAddFundsModal()}
					showWithdrawFundsModal={() => this.showWithdrawFundsModal()}
					showTransferModal={() => this.showTransferModal()}
				/>
				<AddFundsModal visible={this.state.addFundsVisible} onCancel={this.handleCancel} />
				<WithdrawFundsModal visible={this.state.withdrawFundsVisible} onCancel={this.handleCancel} />
				<TransferModal visible={this.state.transferModalVisible} onCancel={this.handleCancel} />
				<Button className="operations-button" type="primary" size={'large'} onClick={this.showModal}>
					Operations
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
	balance: getBalanceSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
