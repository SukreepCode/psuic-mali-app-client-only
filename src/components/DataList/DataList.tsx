import React, { ComponentClass, FunctionComponent, useEffect } from "react";
import { useHistory, Link, Route, RouteComponentProps } from "react-router-dom";

import AdminLayout from "../../features/layouts/AdminLayout";

import { Table, Button, Row, Space, Popconfirm, message } from "antd";
import DataAddForm from "./DataAddForm";
import DataRoute from "./DataRoute";
import DataEditForm from "./DataEditForm";

interface AppProps {
  title?: string;
  data: any[];
  name: string;
  onLoad: Function;
  onDelete: Function;
  onAdd: Function;

}

const DataListPage = ( {
  title,
  data,
  name,
  onLoad,
  onDelete,
  onAdd,
}: AppProps) => {

  const history = useHistory();
  const [addFormVisible, setAddFormVisible] = React.useState(false);
  const [editFormVisible, setEditFormVisible] = React.useState(false);
  const [currentEditId, setCurrentEditId] = React.useState("");


  useEffect(() => {
    onLoad();
  }, []);

  const handleAddButton = () => {
    // history.push(`${name}/add`);
    setAddFormVisible(true);
  };

  const onEdit = (id: string) =>{
    setCurrentEditId(id);
    setEditFormVisible(true);
  };

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
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={(e) => onEdit(record.id)}>Edit</a>
          <Popconfirm
            title="Do you want to delete ?"
            onConfirm={() => onDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>{title}</h1>
      <Row justify="end">
        <p>
          <Button type="primary" onClick={handleAddButton}>
            Add
          </Button>
        </p>
      </Row>
      <Table columns={columns} dataSource={data} />

      <DataAddForm
        title={"Add student entry"}
        visible={addFormVisible}
        onCancel={() => {
          setAddFormVisible(false);
        }}
      />

      <DataEditForm
        title={"Edit student entry"}
        visible={editFormVisible}
        onCancel={() => {
          setEditFormVisible(false);
        }}
        currentId={currentEditId}
      />
    </>
  );

  // Route
};

DataListPage.Route = DataRoute;
export default DataListPage;
