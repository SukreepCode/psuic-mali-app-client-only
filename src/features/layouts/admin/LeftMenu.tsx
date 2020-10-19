import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>Data</span>}>
        <MenuItemGroup title="Main">
          <Menu.Item key="setting:1">Student</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
   
    </Menu>
  );
}

export default LeftMenu;
