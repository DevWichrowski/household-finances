import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './Main.scss';
import Balance from '../Balance/Balance';
import { NavLink, Route } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Goals from '../Goals/Goals';
import Charts from '../Charts/Charts';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false,
			sidebarVisible: true,
			sidebarStyle: 'mobile'
		};
	}

	componentDidMount() {
		this.showSideBar();
		window.addEventListener('resize', this.showSideBar);
	}

	componentWillMount() {
		window.removeEventListener('resize', this.showSideBar);
	}

	onCollapse = (collapsed) => this.setState({ collapsed });

	showSideBar = () => {
		if (window.innerWidth <= 850) {
			this.setState({ sidebarVisible: false });
			this.setState({ sidebarStyle: 'mobile' });
			return;
		}

		this.setState({ sidebarVisible: true });
		this.setState({ sidebarStyle: 'web' });
	};

	render() {
		const { Content, Footer, Sider } = Layout;

		return (
			<div className="Main">
				<Layout className="layout">
					{this.state.sidebarVisible ? (
						<Sider
							collapsible
							collapsed={this.state.collapsed}
							onCollapse={this.onCollapse}
							className={this.state.sidebarStyle}
						>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
								<Menu.Item key="1">
									<NavLink to="/">
										<Icon type="credit-card" />
										<span>Account</span>
									</NavLink>
								</Menu.Item>

								<Menu.Item key="2">
									<NavLink to="/categories" />
									<Icon type="book" />
									<span>Categories</span>
								</Menu.Item>

								<Menu.Item key="3">
									<NavLink to="/charts">
										<Icon type="line-chart" />
										<span>Charts</span>
									</NavLink>
								</Menu.Item>

								<Menu.Item key="4">
									<NavLink to="/goals" />
									<Icon type="star" />
									<span>Goals</span>
								</Menu.Item>
							</Menu>
						</Sider>
					) : null}

					<Layout>
						{this.state.sidebarStyle !== 'web' ? (
							<Icon
								type="menu-unfold"
								onClick={() => this.setState({ sidebarVisible: true, sidebarStyle: 'mobile' })}
								className="sidebar-button"
							/>
						) : null}

						<Content
							className="content"
							onClick={() =>
								this.state.sidebarStyle !== 'web' ? this.setState({ sidebarStyle: 'hide' }) : null}
						>
							<Route exact path="/" component={Balance} />
							<Route path="/categories" component={Categories} />
							<Route path="/goals" component={Goals} />
							<Route path="/charts" component={Charts} />
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
