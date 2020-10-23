import React, { ComponentClass, FunctionComponent, useEffect } from "react";
import { useHistory, Link, Route, RouteComponentProps } from "react-router-dom";

import AdminLayout from "../../features/layouts/AdminLayout";

import { Form, Table, Button, Row, Space, Popconfirm, message } from "antd";
import { ColumnsType } from "antd/es/table";

import DataAddForm from "./DataAddForm";
import DataRoute from "./DataRoute";
import DataEditForm from "./DataEditForm";

import { useSelector, useDispatch } from "react-redux";

import * as Student from "../../features/admin/students/students.slice";

interface AppColumnsType<ObjectType> {
  key: keyof ObjectType;
  title: string;
}

interface AppProps<ObjectType> {
  title?: string;
  onLoad: () => void;
  onDelete: (id: any) => void;
  onAdd: (object: ObjectType) => void;
  onEdit: (id: any, object: ObjectType) => void;
  objects: ObjectType[];
  columns: AppColumnsType<ObjectType>[];
}

function DataListPage<ObjectType>({
  title,
  onLoad,
  onDelete,
  onAdd,
  onEdit,
  objects,
  columns,
}: AppProps<ObjectType>) {

  // form for controlling DataEditForm.tsx
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [addFormVisible, setAddFormVisible] = React.useState(false);
  const [editFormVisible, setEditFormVisible] = React.useState(false);
  const [editFormId, setEditFormId] = React.useState("");
  const [editFormLoading, setEditFormLoading] = React.useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  const handleAddButton = () => {
    setAddFormVisible(true);
  };

  const handleEditButton = async (id: string) => {
    try {
      setEditFormId(id);
      setEditFormLoading(true);
      setEditFormVisible(true);
      const response = await dispatch(Student.fetch(id))

      // form for controlling DataEditForm.tsx
      form.setFieldsValue({
        name: response.data.name,
      });

      setEditFormLoading(false);
    } catch (err) {
      setEditFormVisible(false);
      setEditFormLoading(false);
      message.error(`Can't get current data: ${err}`);
    }
  };


  const onCancelEditForm = () => {
    setEditFormVisible(false);

    // form for controlling DataEditForm.tsx
    // Clear all data
    form.setFieldsValue({
      name: "",
    });
  }

  const columnAction = {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <a onClick={(e) => handleEditButton(record.id)}>Edit</a>
        <Popconfirm
          title="Do you want to delete ?"
          onConfirm={() => onDelete(record.id)}
        >
          <a>Delete</a>
        </Popconfirm>
      </Space>
    ),
  };

  const columnsTable: ColumnsType<ObjectType> = columns.map((column: any) => {
    // Add the `key` to = `dataIndex` of column (Ant Design)
    // https://ant.design/components/table/#Column
    column.dataIndex = column.key;
    return column;
  });

  columnsTable.push(columnAction);

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
      <Table<any> columns={columnsTable} dataSource={objects} />

      <DataAddForm
        title={"Add student entry"}
        visible={addFormVisible}
        onAdd={onAdd}
        onCancel={() => {
          setAddFormVisible(false);
        }}
      />

      <DataEditForm<ObjectType>
        form={form}
        title={"Edit student entry"}
        visible={editFormVisible}
        onEdit={onEdit}
        onCancel={onCancelEditForm}
        isLoading={editFormLoading}
        currentId={editFormId}
      />
    </>
  );

  // Route
}

DataListPage.Route = DataRoute;
export default DataListPage;
