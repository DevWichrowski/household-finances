import React, { Component } from 'react';
import '../../../styles/styles.scss';
import { Modal, Button, message, Select } from 'antd';
import { connect } from 'react-redux';
import { addCredits } from '../../../store/actions/balanceAction';
import NumericInput from 'react-numeric-input';
import { getAddCategoriesSelector } from '../../../store/selectors/balance.selectors';
import './AddFundsModal.scss';

class AddFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null,
			category: 'No category'
		};
	}

	successMessage = () => message.success(`Successfully added ${this.state.funds}$ to account`);

	errorMessage = () => message.error(`Error: Incorrect amount [${this.state.funds}$]`);

	saveCategoryToState = (value) => this.setState({ category: value });

	saveFundsToState = (value) => this.setState({ funds: value });

	clearState = () => this.setState({ funds: null });

	addFunds = () => {
		if (this.state.funds > 0) {
			this.props.addCreditsToStore({
				funds: this.state.funds,
				category: this.state.category
			});
			this.props.onCancel();
			this.successMessage();
			this.clearState();
		} else {
			this.errorMessage();
		}
	};

	render() {
		const { loading } = this.state;
		const Option = Select.Option;

		return (
			<div className="AddFundsModal">
				<Modal
					className="add-funds-modal"
					visible={this.props.visible}
					title="Add amount"
					onOk={this.handleOk}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Close
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.addFunds}>
							Add
						</Button>
					]}
				>
					<p>Give the amount to be added below</p>
					<NumericInput
						onChange={(value) => this.saveFundsToState(value)}
						value={this.state.funds}
						min={1}
						size={30}
					/>
					<p>Choose category</p>
					<Select
						className="category-select"
						defaultValue="No category"
						onChange={this.saveCategoryToState}
					>
						{this.props.addCategories.map((item, index) => (
							<Option key={index} value={item}>
								{item}
							</Option>
						))}
					</Select>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	addCategories: getAddCategoriesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFundsModal);
