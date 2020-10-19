import React from "react";
import { Layout } from "antd";
import "./loginPage.css";
import "../../app/App.less";
import { Button } from "antd";

type AppProps = { message?: string };

const LoginPage = ({ message }: AppProps) => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Button type="primary">Button</Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LoginPage;
