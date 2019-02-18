import React, { Component } from 'react';
import './Categories.scss';
import CategoryColumn from './CategoryColumn/CategoryColumn';
import { connect } from 'react-redux';
import { getAddCategoriesSelector, getWithdrawSelector } from '../../store/selectors/balance.selectors';
import { Button } from 'antd';

class Categories extends Component {
	render() {
		return (
			<div className="Categories">
				<h1> Kategorie operacji </h1>
				<div className="categories-container">
					<div className="left-column">
						<CategoryColumn dataSource={this.props.addCategories} arrow="arrow-up" />
					</div>
					<div className="right-column">
						<CategoryColumn dataSource={this.props.withdrawCategories} arrow="arrow-down" />
					</div>
				</div>
				<Button className="add-category-button" type="primary" size={'large'}>
					Dodaj kategorię
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	addCategories: getAddCategoriesSelector(state),
	withdrawCategories: getWithdrawSelector(state)
});

export default connect(mapStateToProps, null)(Categories);
