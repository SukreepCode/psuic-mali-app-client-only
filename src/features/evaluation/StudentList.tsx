import React, { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import DataList from "../../components/DataTable/DataTable";
import { Space, Table, Row, Col, Grid } from "antd";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "../admin/students/students.slice";
import { Student as StudentType } from "../admin/students/students.service";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);

  useEffect(() => {
    dispatch(Student.fetchAll());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text:any, record:any) => (
      <a href={`/evaluation/student-list/evaluate/${record.id}`}>{text}</a>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Evaluate</a>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout">
        <h1>Project in DM 1 - Progress 1</h1>
          <Table columns={columns} dataSource={students.data} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentList;
