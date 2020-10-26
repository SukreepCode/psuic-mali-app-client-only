import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import DataList from "../../components/DataTable/DataTable";

import { Form, Input, Button, Tag, Radio, Divider } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { DM_TYPE } from "./string";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "../admin/students/students.slice";
import * as Criteria from "../admin/criteria/criteria.slice";
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
  let { id, dm_type, criteria_id }: any = useParams();
  
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    id: "",
    name: "",
  });
  const [criteriaTitle, setCriteriaTitle] = useState("");

  const getData = async () => {
    const [reponseStudent, reponseCriteria] = await Promise.all([
      dispatch(Student.fetch(id)), 
      dispatch(Criteria.fetch(criteria_id))
    ]);

    setStudent({
      id: reponseStudent.data.id,
      name: reponseStudent.data.name,
    });
    setCriteriaTitle(reponseCriteria.data.title);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout title="Evaluation Form">
        <div className="card-simple">
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>{DM_TYPE[dm_type]} - {criteriaTitle}</h2>
            <p>You're evaluating {student.name}.</p>

            <div style={{ marginTop: "3rem" }}>
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

                <h3>Criteria</h3>
                <Divider></Divider>

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

                <h3>Comment</h3>
                <Divider ></Divider>

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
    </Layout>
  );
};

export default Evaluate;
