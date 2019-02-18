import React, { Component } from 'react';
import { Modal, Button, Radio, Input, message } from 'antd';
import { newAddCategory, newWithdrawCategory } from '../../../store/actions/balanceAction';
import { connect } from 'react-redux';
import { getWithdrawSelector, getAddCategoriesSelector } from '../../../store/selectors/balance.selectors';

class CategoryModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			categoryName: '',
			categoryType: 'addCategory'
		};
	}

	switchToAddCategory = () => {
		this.setState({ categoryType: 'addCategory' });
		console.log('Switchted to: [add category]');
	};

	switchToWithdrawCategory = () => {
		this.setState({ categoryType: 'withdrawCategory' });
		console.log('Switchted to: [withdraw category]');
	};

	saveCategoryName = (e) => {
		this.setState({ categoryName: e.target.value });
		console.log(this.state.categoryName);
	};

	addNewCategory = () => {
		if (this.state.categoryName !== '') {
			if (
				this.state.categoryType === 'addCategory' &&
				!this.props.addCategories.includes(this.state.categoryName) 
			) {
				this.props.newAddCategory(this.state.categoryName);
				message.success(`Pomyślnie dodano nową kategorie wpłaty: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
			} else if (
				this.state.categoryType === 'withdrawCategory' &&
				!this.props.withdrawCategories.includes(this.state.categoryName)
			) {
				this.props.newWithdrawCategory(this.state.categoryName);
				message.success(`Pomyślnie dodano nową kategorie wypłaty: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
			} else if (
				this.props.addCategories.includes(this.state.categoryName) ||
				!this.props.withdrawCategories.includes(this.state.categoryName)
			) {
				message.error(`Kategoria [${this.state.categoryName}] już istnieje.`);
			}
		} else {
			message.error(`Nie udało się dodać kategorii :(`);
		}
	};

	render() {
		const { loading } = this.state;

		return (
			<div className="CategoryModal">
				<Modal
					title="Dodaj nową kategorię"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					onOk={this.handleOk}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Zamknij
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.addNewCategory}>
							Dodaj
						</Button>
					]}
				>
					<p> Podaj tytuł nowej kategorii:</p>
					<Input onChange={this.saveCategoryName} value={this.state.categoryName} />
					<Radio.Group defaultValue="addCategory" buttonStyle="solid">
						<Radio.Button value="addCategory" onClick={this.switchToAddCategory}>
							Nowa kategoria wpłaty
						</Radio.Button>
						<Radio.Button value="withdrawCategory" onClick={this.switchToWithdrawCategory}>
							Nowa kategoria wypłaty
						</Radio.Button>
					</Radio.Group>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	addCategories: getAddCategoriesSelector(state),
	withdrawCategories: getWithdrawSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
	newAddCategory: (payload) => dispatch(newAddCategory(payload)),
	newWithdrawCategory: (payload) => dispatch(newWithdrawCategory(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
