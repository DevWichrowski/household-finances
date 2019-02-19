import React, { Component } from 'react';
import './CategoryModal.scss';
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
		let addCategoriesLowerCase = [];
		let withdrawCategoriesLowerCase = [];
		const categoryNameToLower = this.state.categoryName.toLowerCase();

		this.props.addCategories.map((category) => {
			return (addCategoriesLowerCase = [ ...addCategoriesLowerCase, category.toLowerCase() ]);
		});

		this.props.withdrawCategories.map((category) => {
			return (withdrawCategoriesLowerCase = [ ...withdrawCategoriesLowerCase, category.toLowerCase() ]);
		});

		switch (true) {
			case this.state.categoryName === '': {
				message.error('Nie udało się dodać kategorii');
				break;
			}
			case this.state.categoryType === 'addCategory' && !addCategoriesLowerCase.includes(categoryNameToLower): {
				this.props.newAddCategory(categoryNameToLower);
				message.success(`Pomyślnie dodano nową kategorie wpłaty: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
				break;
			}
			case this.state.categoryType === 'withdrawCategory' &&
				!withdrawCategoriesLowerCase.includes(categoryNameToLower): {
				this.props.newWithdrawCategory(categoryNameToLower);
				message.success(`Pomyślnie dodano nową kategorie wypłaty: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
				break;
			}
			case addCategoriesLowerCase.includes(categoryNameToLower) ||
				withdrawCategoriesLowerCase.includes(categoryNameToLower): {
				message.error(`Kategoria [${this.state.categoryName}] już istnieje.`);
				break;
			}
			default: {
				break;
			}
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
