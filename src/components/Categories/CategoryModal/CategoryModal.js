import React, { Component } from 'react';
import { Modal, Button, Radio, Input } from 'antd';
import { newAddCategory, newWithdrawCategory } from '../../../store/actions/balanceAction';
import { connect } from 'react-redux';

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
			if (this.state.categoryType === 'addCategory') {
				this.props.newAddCategory(this.state.categoryName);
			} else if (this.state.categoryType === 'withdrawCategory') {
			this.props.newWithdrawCategory(this.state.categoryName);
			}
		} else {
			console.log("CategoryName is equal to '' ");
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
					<p> Podaj tytuł nowej kategorii</p>
					<Input onChange={this.saveCategoryName} />
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

const mapDispatchToProps = (dispatch) => ({
	newAddCategory: (payload) => dispatch(newAddCategory(payload)),
	newWithdrawCategory: (payload) => dispatch(newWithdrawCategory(payload))
});

export default connect(null, mapDispatchToProps)(CategoryModal);
