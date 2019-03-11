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

	switchToAddCategory = () => this.setState({ categoryType: 'addCategory' });

	switchToWithdrawCategory = () => this.setState({ categoryType: 'withdrawCategory' });

	saveCategoryName = (e) => this.setState({ categoryName: e.target.value });

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
				message.error('Category could not be added');
				break;
			}
			case this.state.categoryType === 'addCategory' && !addCategoriesLowerCase.includes(categoryNameToLower): {
				this.props.newAddCategory(categoryNameToLower);
				message.success(`New income categories have been successfully added: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
				break;
			}
			case this.state.categoryType === 'withdrawCategory' &&
				!withdrawCategoriesLowerCase.includes(categoryNameToLower): {
				this.props.newWithdrawCategory(categoryNameToLower);
				message.success(`A new withdraw category has been successfully added: [${this.state.categoryName}]`);
				this.props.onCancel();
				this.setState({ categoryName: '' });
				break;
			}
			case addCategoriesLowerCase.includes(categoryNameToLower) ||
				withdrawCategoriesLowerCase.includes(categoryNameToLower): {
				message.error(`Category [${this.state.categoryName}] already exists.`);
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
					className="category-modal"
					title="Add new category"
					visible={this.props.visible}
					onCancel={this.props.onCancel}
					onOk={this.handleOk}
					footer={[
						<Button key="back" onClick={this.props.onCancel}>
							Close
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.addNewCategory}>
							Add
						</Button>
					]}
				>
					<p>Enter the title of the new category:</p>
					<Input onChange={this.saveCategoryName} value={this.state.categoryName} />
					<Radio.Group defaultValue="addCategory" buttonStyle="solid">
						<Radio.Button value="addCategory" onClick={this.switchToAddCategory}>
							New income category
						</Radio.Button>
						<Radio.Button value="withdrawCategory" onClick={this.switchToWithdrawCategory}>
							New withdraw category
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
