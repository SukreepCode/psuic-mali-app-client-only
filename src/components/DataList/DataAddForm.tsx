import React from "react";
import { Form, Input, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";
import { FieldsType } from "./DataList";
import { EditableObject } from "./utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps<ObjectType> = {
  visible?: boolean;
  onCancel: () => void;
  onAdd: Function;
  title?: string;
  fields: FieldsType<ObjectType>[];
};

function DataAddForm<ObjectType>({
  visible,
  onCancel,
  title,
  onAdd,
  fields,
}: AppProps<ObjectType>) {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [form] = Form.useForm();
  
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);

    let obj: EditableObject = { id: uuidv4() };
    // add all keys to add 
    fields.map( (field: any) => {
      obj[field.key] = values[field.key];
    });
 
    try {
      await onAdd(obj);
      onCancel();
    } catch (err) {
      console.error(err);
      message.error(`Can't add data: ${err}`);
    }
    setConfirmLoading(false);
    form.resetFields();
  };


  return (
    <>
      <Modal
        visible={visible}
        title={title}
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        confirmLoading={confirmLoading}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onFinish(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          {fields.map((field: any) => (
            <Form.Item
              name={field.key}
              label={field.title}
              rules={[{ required: field.required }]}
            >
              <Input />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
}

export default DataAddForm;
