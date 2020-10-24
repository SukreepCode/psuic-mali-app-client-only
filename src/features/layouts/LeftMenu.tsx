import React from 'react';
import { Menu, Grid } from 'antd';
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu theme={md ? "dark" : "light"} mode={md ? "horizontal" : "inline"} defaultSelectedKeys={['home']} className="menu-background">
      <Menu.Item key="home">
        <Link to="/evaluation">Home</Link>
      </Menu.Item>
      <SubMenu key="sub1F" title={<span>Data</span>}>
        <MenuItemGroup title="Main">
          <Menu.Item key="data:students"><Link to="/students">Students</Link></Menu.Item>
          <Menu.Item key="data:teachers"><Link to="/teachers">Teachers</Link></Menu.Item>
          <Menu.Item key="data:criteria"><Link to="/criteria">Criteria</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>

    </Menu>
  );
}

export default LeftMenu;
