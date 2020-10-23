import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Modal } from "antd";
import AdminLayout from "../../features/layouts/AdminLayout";
import { v4 as uuidv4 } from 'uuid';
import { message  } from 'antd';

import { useSelector, useDispatch } from "react-redux";
import * as Student from "../../features/admin/students/students.slice";
// import StudentService from "./students.service";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type AppProps = { 
  visible?: boolean; 
  onCancel: () => void;
  title?: string;
};

export default ({ visible, onCancel, title }: AppProps) => {
    
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const dispatch = useDispatch();
  //const students = useSelector(Student.selector);
  const history = useHistory();

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
        await dispatch(Student.addData(entry));
        dispatch(Student.actions.add(entry));
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

      {/* <div style={{ maxWidth: "500px", margin: "0 auto" }}> */}
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          // onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            
            <Button type="primary" htmlType="submit" loading={confirmLoading}>
              Submit
            </Button>
            <Button style={{marginLeft: "20px"}} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item> */}
         
        </Form>
      {/* </div> */}
      </Modal>
    </>
  );
};