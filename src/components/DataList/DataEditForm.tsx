import React from "react";
import { Form, Input, Modal, Row } from "antd";
import { FormInstance } from "antd/lib/form";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FieldsType } from "./DataList";
import { EditableObject } from "./utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps<ObjectType> = {
  visible?: boolean;
  onCancel: () => void;
  onEdit: Function;
  title?: string;
  currentId: string;
  isLoading: boolean;
  form: FormInstance<any>;
  fields: FieldsType<ObjectType>[];
};

function DataEditForm<ObjectType>({
  visible,
  onCancel,
  onEdit,
  title,
  currentId,
  isLoading,
  form,
  fields
}: AppProps<ObjectType>) {
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);

    let obj: EditableObject = { id: currentId };
    // add all keys to add 
    fields.map( (field: any) => {
      obj[field.key] = values[field.key];
    });

    try {
      await onEdit(currentId, obj);
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
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        confirmLoading={confirmLoading}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              // form.resetFields();
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
          {isLoading && (
            <Row justify="center" style={{ marginBottom: "10px" }}>
              <LoadingOutlined style={{ fontSize: "32px" }} />
            </Row>
          )}
          {!isLoading && fields.map((field: any) => (
              <Form.Item
                name={field.key}
                label={field.title}
                rules={[{ required: field.required }]}
              >
                <Input />
              </Form.Item>
            ))
          }
        </Form>
      </Modal>
    </>
  );
}

export default DataEditForm;
