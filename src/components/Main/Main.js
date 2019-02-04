import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Main.scss';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {Content, Footer, Sider,} = Layout;

        return (
            <div className="Main">
                <Layout className="layout">
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="credit-card"/>
                                <span>Stan konta</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="line-chart"/>
                                <span>Historia</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="star"/>
                                <span>Cele</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className="content">

                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            @Author <a href="https://github.com/DevWichrowski">DevWichrowski</a>
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Main;