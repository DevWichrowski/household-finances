import React, { Component } from 'react';
import './AddColumn.scss';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { List,Icon } from 'antd';


class AddColumn extends Component {
	render() {
		return (
			<div className="AddColumn">
				<h2>Kategorie wplat</h2>
                <div className="add-column">
                        <List
                        header={<div><Icon id="arrow-up" type="arrow-up" /> Kategorie wpłat</div>}
                        bordered
                        dataSource={this.props.balanceInfo.addCategories}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                      />
                </div>
			</div>
		);
	}
}



const mapStateToProps = (state) => ({
	balanceInfo: state.balanceInfo
});

export default connect(mapStateToProps, null)(AddColumn);