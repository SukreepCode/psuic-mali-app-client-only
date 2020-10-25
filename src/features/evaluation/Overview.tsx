import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import * as Criteria from "../admin/criteria/criteria.slice";
import { Select, List, Row, Col, Grid } from "antd";

const Overview = () => {
  const { useBreakpoint } = Grid;

  const { md } = useBreakpoint();
  const dm1Criteria = useSelector(Criteria.dm1selector);
  const dm2Criteria = useSelector(Criteria.dm2selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Criteria.fetchAll());
  }, []);

  return (
    <Layout isHome={true}>
      <div className="container">
        {/* <SemesterSelector /> */}
        <Row>
          <Col span={24}>
            <h1 className="title">DM Evaluation System</h1>
            <div className="description">2020/2</div>
          </Col>
          <Col span={24}>
            <div className="card">
              <h3>Project in DM 1</h3>
              <List
                itemLayout="horizontal"
                dataSource={dm1Criteria}
                renderItem={(item) => (
                  <Link  key={item.id} to="/evaluation/student-list">
                    <div className="list-item">
                      <Row justify="space-between">
                        <div >{item.title}</div>
                        <div >{item.ratio} %</div>
                      </Row>
                      </div>
                  </Link>
                )}
              />
            </div>
          </Col>
          <Col span={24}>
            <div className="card">
              <h3>Project in DM 2</h3>
              <List
                itemLayout="horizontal"
                dataSource={dm2Criteria}
                renderItem={(item) => (
                  <Link  key={item.id} to="/evaluation/student-list">
                  <div className="list-item">
                    <Row justify="space-between">
                      <div >{item.title}</div>
                      <div >{item.ratio} %</div>
                    </Row>
                    </div>
                </Link>
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
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
};
