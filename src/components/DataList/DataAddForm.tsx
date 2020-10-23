import React from "react";
import { Form, Input, Modal } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { message  } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps = { 
  visible?: boolean; 
  onCancel: () => void;
  onAdd: Function;
  title?: string;
};

export default ({ visible, onCancel, title, onAdd}: AppProps) => {
    
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values: any) => {
    setConfirmLoading(true);
    console.log(values);

    const entry =  {
        id: uuidv4(),
        name: values.user.name
    }

    try{
        await onAdd(entry);
        onCancel();
    } catch(err) {
        console.error(err);
        message.error(`Can't add data: ${err}`);
    }
    setConfirmLoading(false);
  };

  const [form] = Form.useForm();

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
          .then(values => {
            form.resetFields();
            onFinish(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >

        <Form
          {...layout}
          form={form}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

        </Form>

      </Modal>
    </>
  );
};
