import React, { Component } from 'react';
import './AddFundsModal.scss';
import { Modal, Button, message, Select } from 'antd';
import { connect } from 'react-redux';
import { addCredits } from '../../../store/actions/balanceAction';
import NumericInput from 'react-numeric-input';

class AddFundsModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			visible: false,
			funds: null,
			category: ''
		};
	}

	saveCategoryToState = (value) => {
		this.setState({ category: value });
		console.log(`Kategoria: ${value}`);
	};

	saveFundsToState = (value) => {
		this.setState({ funds: value });
	};

	clearState = () => {
		this.setState({ funds: null });
	};

	render() {
		const { loading } = this.state;
		const successMessage = () => message.success(`Pomyślnie dodane ${this.state.funds} zł do konta głównego`);
		const errorMessage = () => message.error(`Błąd: Nie odpowiednia kwota [${this.state.funds} zł]`);
		const Option = Select.Option;

		return (
			<div className="AddFundsModal">
				<Modal
					visible={this.props.visible}
					title="Dodaj kwotę"
					onOk={this.handleOk}
					onCancel={this.props.onCancel}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button
							key="submit"
							type="primary"
							loading={loading}
							onClick={() => {
								if (this.state.funds > 0) {
									this.props.addCreditsToStore({
										funds: this.state.funds,
										category: this.state.category
									});
									this.props.onCancel();
									successMessage();
									this.clearState();
								} else {
									errorMessage();
								}
							}}
						>
							Dodaj
						</Button>
					]}
				>
					<p>Poniżej podaj kwotę do wpłaty</p>
					<NumericInput
						onChange={(value) => this.saveFundsToState(value)}
						value={this.state.funds}
						min={1}
						size={30}
					/>
					<p>Wybierz kategorie</p>
					<Select style={{ width: 120 }} defaultValue="bez kategorii" onChange={this.saveCategoryToState}>
						{this.props.balanceInfo.addCategories.map((item, index) => {
							return (
								<Option key={index} value={item}>
									{item}
								</Option>
							);
						})}
					</Select>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

const mapDispatchToProps = (dispatch) => ({
	addCreditsToStore: (payload) => dispatch(addCredits(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFundsModal);
