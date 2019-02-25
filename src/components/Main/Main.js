import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './Main.scss';
import Balance from '../Balance/Balance';
import { NavLink, Route } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Goals from '../Goals/Goals';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		};
	}

	onCollapse = (collapsed) => this.setState({ collapsed });

	render() {
		const { Content, Footer, Sider } = Layout;

		return (
			<div className="Main">
				<Layout className="layout">
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
						<div className="logo" />
						<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
							<Menu.Item key="1">
								<NavLink to="/">
									<Icon type="credit-card" />
									<span>Stan konta</span>
								</NavLink>
							</Menu.Item>

							<Menu.Item key="2">
								<NavLink to="/categories" />
								<Icon type="book" />
								<span>Kategorie</span>
							</Menu.Item>

							<Menu.Item key="3">
								<Icon type="line-chart" />
								<span>Historia</span>
							</Menu.Item>

							<Menu.Item key="4">
								<NavLink to="/goals" />
								<Icon type="star" />
								<span>Cele</span>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Content className="content">
							<Route exact path="/" component={Balance} />
							<Route path="/categories" component={Categories} />
							<Route path="/goals" component={Goals} />
						</Content>
						<Footer style={{ textAlign: 'center' }}>
							@Author <a href="https://github.com/DevWichrowski">DevWichrowski</a>
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Main;
