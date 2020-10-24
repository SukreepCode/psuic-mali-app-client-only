import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
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
    <AdminLayout>
      <div className="container">
        {/* <SemesterSelector /> */}
        <Row>
          <Col span={md ? 12 : 24}>
            <div className="content-layout ">
              <h1>Project in DM 1</h1>
              <List
                itemLayout="horizontal"
                dataSource={dm1Criteria}
                renderItem={(item) => (
                  <List.Item actions={[<a href="#">{item.ratio} %</a>]}>
                   <List.Item.Meta
                      title={(<a href="/evaluation/student-list" style={{ padding: "16px"}}>{item.title}</a>)}
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
                dataSource={dm2Criteria}
                renderItem={(item) => (
                    
                  <List.Item actions={[<a href="#">{item.ratio} %</a>]}>
                    <List.Item.Meta
                      title={(<a href="/evaluation/student-list" style={{ padding: "16px"}}>{item.title}</a>)}
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