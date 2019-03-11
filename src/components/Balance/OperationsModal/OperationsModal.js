import React, { Component } from 'react';
import './OperationsModal.scss';
import { Modal } from 'antd';

class OperationsModal extends Component {
	render() {
		return (
			<div className="OperationsModal">
				<Modal
					className="operations-modal"
					title="Operations"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					footer={null}
				>
					<div className="modal-option" onClick={() => this.props.showAddModal()}>
						Add funds
					</div>
					<div className="modal-option" onClick={() => this.props.showWithdrawFundsModal()}>
						Withdraw funds
					</div>
					<div className="modal-option" onClick={() => this.props.showTransferModal()}>
						Transfer to goal
					</div>
				</Modal>
			</div>
		);
	}
}

export default OperationsModal;
