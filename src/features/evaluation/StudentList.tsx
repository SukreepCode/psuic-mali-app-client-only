import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Layout from "./Layout";
import DataList from "../../components/DataTable/DataTable";
import { Space, Table, Row, Col, Grid } from "antd";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "../admin/students/students.slice";
import { Student as StudentType } from "../admin/students/students.service";

const StudentList = () => {
  const dispatch = useDispatch();
  const history= useHistory();
  const students = useSelector(Student.selector);

  useEffect(() => {
    dispatch(Student.fetchAll());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <Link to={`/evaluation/student-list/evaluate/${record.id}`}>
          {text}
        </Link>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href="#">Evaluate</a>
        </Space>
      ),
    },
  ];

  return (
    <Layout title="Student List">
      <div className="container">
        <div className="card-simple ">

          <h2>Project in DM 1 - Progress 1</h2>
          <p>Select the student name to evaluate</p>
          <div style={{ marginTop: "3rem"}} />
          <Table
            columns={columns}
            dataSource={students.data}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push(`/evaluation/student-list/evaluate/${record.id}`);
                }, // click row
              };
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default StudentList;
