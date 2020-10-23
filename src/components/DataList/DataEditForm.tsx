import React from "react";
import { Form, Input, Modal, Row } from "antd";
import { FormInstance } from "antd/lib/form";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
};

function DataEditForm<ObjectType>({
  visible,
  onCancel,
  onEdit,
  title,
  currentId,
  isLoading,
  form,
}: AppProps<ObjectType>) {
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);
    console.log(values);

    const entry = {
      id: currentId,
      name: values.name,
    };

    try {
      await onEdit(currentId, entry);
      onCancel();
    } catch (err) {
      console.error(err);
      message.error(`Can't add data: ${err}`);
    }
    setConfirmLoading(false);
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
              form.resetFields();
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
          {!isLoading && (
            <>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
}

export default DataEditForm;
