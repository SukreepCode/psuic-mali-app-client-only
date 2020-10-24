import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import DataList from "../../components/DataTable/DataTable";

import { Form, Input, Button, Checkbox, Radio, Divider } from "antd";
import { useHistory, useParams } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "../admin/students/students.slice";
import { Student as StudentType } from "../admin/students/students.service";

const { TextArea } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type AppProps = { message?: string };

const Evaluate = ({ message }: AppProps) => {
  let { id }: any = useParams();
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    id: "",
    name: "",
  });

  const getData = async () => {
    const { data } = await dispatch(Student.fetch(id));
    setStudent({
      id: data.id,
      name: data.name,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout">
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h1>Project in DM 1 - Progress 1</h1>
            <h1>Evaluate</h1>
            <p>You're evaluating {student.name}.</p>
            <div style={{ marginTop: "30px " }}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                {/* <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item> */}

                
                <Divider orientation="left">Criteria</Divider>

                <Form.Item
                label="Criteria 1"
                name="criteria1"
                >
                  <Radio.Group buttonStyle="solid" size="large">
                    <Radio.Button value="5">5</Radio.Button>
                    <Radio.Button value="4">4</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="1">1</Radio.Button>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                label="Criteria 2"
                name="criteria2"
                >
                  <Radio.Group buttonStyle="solid" size="large">
                    <Radio.Button value="5">5</Radio.Button>
                    <Radio.Button value="4">4</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="1">1</Radio.Button>
                  </Radio.Group>
                </Form.Item>

                <Divider orientation="left">Comment</Divider>

                <Form.Item label="Comment" name="comment">
                  <TextArea autoSize={{ minRows: 3 }} />
                </Form.Item>

                <Form.Item
                  label="Personal Note"
                  name="personalNote"
                  extra="* The student will not see this note."
                >
                  <TextArea autoSize={{ minRows: 3 }} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Evaluate;
