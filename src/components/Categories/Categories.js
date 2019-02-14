import React, { Component } from 'react';
import './Categories.scss';
import CategoryColumn from './CategoryColumn/CategoryColumn';
import { connect } from 'react-redux';

class Categories extends Component {
	render() {
		return (
			<div className="Categories">
				<h1> Kategorie operacji </h1>
				<div className="categories-container">
					<div className="left-column">
						<CategoryColumn dataSource={this.props.balanceInfo.addCategories} arrow="arrow-up"/>
					</div>
					<div className="right-column">
                    <CategoryColumn dataSource={this.props.balanceInfo.withdrawCategories} arrow="arrow-down"/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, null)(Categories);
