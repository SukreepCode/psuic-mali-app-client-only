import React, { useEffect } from "react";

import { Form, Table, Button, Row, Space, Popconfirm, message } from "antd";
import { ColumnsType } from "antd/es/table";

import DataAddForm from "./DataAddForm";
import DataEditForm from "./DataEditForm";

export interface FieldsType<ObjectType> {
  key: keyof ObjectType;
  title: string;
  required: boolean;
}

interface Props<ObjectType> {
  title?: string;
  onFetchAll: () => void;
  onFetch: (id: any) => any;
  onDelete: (id: any) => void;
  onAdd: (object: ObjectType) => void;
  onEdit: (id: any, object: ObjectType) => void;
  objects: ObjectType[];
  fields: FieldsType<ObjectType>[];
}

function DataList<ObjectType>({
  title,
  onFetchAll,
  onFetch,
  onDelete,
  onAdd,
  onEdit,
  objects,
  fields,
}: Props<ObjectType>) {

  // form for controlling DataEditForm.tsx
  const [form] = Form.useForm();

  const [addFormVisible, setAddFormVisible] = React.useState(false);
  const [editFormVisible, setEditFormVisible] = React.useState(false);
  const [editFormId, setEditFormId] = React.useState("");
  const [editFormLoading, setEditFormLoading] = React.useState(false);

  useEffect(() => {
    onFetchAll();
  }, []);

  const handleAddButton = () => {
    setAddFormVisible(true);
  };

  const handleEditButton = async (id: string) => {
    try {
      setEditFormId(id);
      setEditFormLoading(true);
      setEditFormVisible(true);
      const response = await onFetch(id);

      interface setFieldType {
        [key: string]: any;
      }
  
      let obj: setFieldType = {};
      // add all keys to add 
      fields.map( (field: any) => {
        obj[field.key] = response.data[field.key];
      });

      // form for controlling DataEditForm.tsx
      form.setFieldsValue(obj);

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
    form.resetFields();
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

  const columnsTable: ColumnsType<ObjectType> = fields.map((field: any) => {
    // Add the `key` to = `dataIndex` of column (Ant Design)
    // https://ant.design/components/table/#Column
    const tmp = {
      key: field.key,
      dataIndex: field.key,
      title: field.title
    }
    return tmp;
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

      <DataAddForm<ObjectType>
        title={"Add new collection"}
        visible={addFormVisible}
        onAdd={onAdd}
        onCancel={() => {
          setAddFormVisible(false);
        }}
        fields={fields}
      />

      <DataEditForm<ObjectType>
        form={form}
        title={"Edit the collection"}
        visible={editFormVisible}
        onEdit={onEdit}
        onCancel={onCancelEditForm}
        isLoading={editFormLoading}
        currentId={editFormId}
        fields={fields}
      />
    </>
  );

  // Route
}

export default DataList;
