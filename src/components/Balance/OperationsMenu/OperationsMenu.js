import React, {Component} from 'react';
import './OperationsMenu.scss';
import {Menu} from 'antd';


class OperationsMenu extends Component {
    render() {
        const MenuItemGroup = Menu.ItemGroup;

        return (
            <div className="Operations">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <MenuItemGroup key="operations-option" title="Operacje">
                        <Menu.Item key="1">Dodaj kwote</Menu.Item>
                        <Menu.Item key="2">Odejmij kwote</Menu.Item>
                        <Menu.Item key="3">Odłóż na cel</Menu.Item>
                    </MenuItemGroup>
                </Menu>
            </div>
        );
    }
}

export default OperationsMenu;