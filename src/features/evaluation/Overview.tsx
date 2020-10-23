import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import { Select, List, Row, Col, Grid } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Overview = () => {
  const { useBreakpoint } = Grid;
  
  const { md } = useBreakpoint();
  return (
    <AdminLayout>
      <div className="container">
            <SemesterSelector />
        <Row>
          <Col span={md ? 12 : 24}>
            <div className="content-layout ">
              <h1>Project in DM 1</h1>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={md ? 12 : 24}>
            <div className="content-layout ">
              <h1>Project in DM 2</h1>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
};

export default Overview;

const SemesterSelector = () => {
    const { Option } = Select;
    return (
        <Row justify="end">
          <div style={{ marginTop: "24px", marginRight: "24px" }}>
            <Select defaultValue="2020-1" style={{ width: 120 }}>
              <Option value="2020-1">2020 / 1</Option>
              <Option value="2019-2">2019 / 2</Option>
            </Select>
          </div>
        </Row>
    );
}