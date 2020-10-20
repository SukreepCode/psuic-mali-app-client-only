import React from "react";

import { Form, Input, Button } from "antd";
import AdminLayout from "../layouts/admin/AdminLayout";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps = { visible?: boolean; setVisible?: Function };

export default ({ visible, setVisible }: AppProps) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: any) => {
    setConfirmLoading(true);
    console.log(values);
    setTimeout(() => {
      setConfirmLoading(false);
      }, 2000);
    
  };

  return (
    <AdminLayout>
      <h1>Add Student Entry</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" loading={confirmLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AdminLayout>
  );
};
