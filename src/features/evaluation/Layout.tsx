import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Row, PageHeader, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type AppProps = {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  isHome?: boolean;
};

const MyLayout = ({ children, title, subTitle, isHome = false}: AppProps) => {

  const backFunction = isHome?undefined:() => window.history.back();
  
  console.log(isHome);
  return (
    <>
      {/* <Row justify="end"> */}
      <div className="container">
        <PageHeader
          // ghost={false}
          onBack={backFunction}
          title={title}
          subTitle={subTitle}
          extra={[
            <Button key="3"><Link to="/evaluation">Home</Link></Button>,
            <Button key="1" type="primary">
              Logout
            </Button>,
          ]}
        >
       
        </PageHeader>
        <Content>{children}</Content>

        <Footer>
          <div style={{ marginTop: "2rem"}}></div>
          <Row justify="center">
            <a href="/">Copyright PSUIC</a>
          </Row>
        </Footer>
      </div>
    </>
  );
};

export default MyLayout;
