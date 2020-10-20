import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import AdminLayout from "../layouts/admin/AdminLayout";

import { useSelector, useDispatch } from "react-redux";
import * as Student from "./students.slice";
import StudentService from "./students.service";

import { Table, Button, Row, Space, Popconfirm, message } from "antd";

const linkPrefix = "/students";


const StudentPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);

  useEffect(() => {
    dispatch(Student.fetchAll());
  }, []);

  const handleAddButton = () => {
    history.push(`${linkPrefix}/add`);
  }

  const handleDelete = async (id: string) => {
    try{
      await StudentService.delete(id);
      dispatch(Student.actions.delete(id));
  } catch(err) {
      console.error(err);
      message.error(`Can't delete data: ${err}`);
    }
  }

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
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link to={`${linkPrefix}/edit/${record.id}`}>Edit</Link>
          <Popconfirm title="Do you want to delete ?" onConfirm={() => handleDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <AdminLayout>
      <h1>Students Data</h1>
      <Row justify="end">
        <p>
          <Button type="primary" onClick={handleAddButton}>
            Add
          </Button>
        </p>
      </Row>
      <Table columns={columns} dataSource={students.data} />
      <Button onClick={() => dispatch(Student.fetchAll())}>Reload Data</Button>
    </AdminLayout>
  );
};

export default StudentPage;
