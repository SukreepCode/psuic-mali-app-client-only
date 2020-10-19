import React from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./AdminLayout.less";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

type AppProps = {
  message?: string;
  children?: React.ReactNode;
};

const AdminLayout = ({ message, children }: AppProps) => {
  const [visible, setVisible] = React.useState(false);
  const { md } = useBreakpoint();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div className="background">
      <nav className="menuBar">
        <div className="menuCon">
          {!md && (
            <Button className="barsMenu" type="text" onClick={showDrawer}>
              <span className="barsBtn"></span>
            </Button>
          )}

          <div className="logo">
            <a href="">logo</a>
          </div>
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>

          <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </nav>
      <Content>
        <div className="container">
          <div className="site-layout-content">{children}</div>
        </div>
      </Content>
    </div>
  );
};

export default AdminLayout;
