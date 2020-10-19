import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../layouts/admin/AdminLayout";
import * as Student from "./students.slice";

import { Table, Button } from "antd";

type AppProps = { message?: string };

const StudentPage = ({ message }: AppProps) => {
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);
  useEffect(() => {
    dispatch(Student.fetch());
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <AdminLayout>
      <h1>Students Data</h1>
      <Table columns={columns} dataSource={students.data} />
      <Button onClick={() => dispatch(Student.fetch())}>Reload Data</Button>
    </AdminLayout>
  );
};

export default StudentPage;
