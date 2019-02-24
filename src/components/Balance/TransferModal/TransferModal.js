import React, { Component } from 'react';
import './TransferModal.scss';
import { Modal, Button, Select } from 'antd';
import { getBalanceSelector } from '../../../store/selectors/balance.selectors';
import { connect } from 'react-redux';
import NumericInput from 'react-numeric-input';

class TransferModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
      loading: false,
      funds: null
		};
	}

  saveFunds = (value) => {
    this.setState({funds: value});
    console.log(this.state.funds);
  }

	render() {
		const { loading } = this.state;
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
						<Button key="submit" type="primary" loading={loading}>
							Przelej
						</Button>
					]}
				>
					<p>Podaj kwotę</p>
          <NumericInput
						className="numeric-input"
						onChange={(value) => this.saveFunds(value)}
						min={1}
						size={30}
						value={this.state.funds}
					/>
					<p>Wybierz cel</p>
          <Select />
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	// addCreditsToStore: (payload) => dispatch(addCredits(payload)),
	// withdrawCreditsFromStore: (payload) => dispatch(withdrawCredits(payload))
});

const mapStateToProps = (state) => ({
	balance: getBalanceSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferModal);