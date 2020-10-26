import React, { useEffect, useState } from "react";
import { useHistory, Link, useParams} from "react-router-dom";
import Layout from "./Layout";
import DataList from "../../components/DataTable/DataTable";
import { Space, Table, Row, Col, Grid } from "antd";
import { DM_TYPE } from "./string";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "../admin/students/students.slice";
import * as Criteria from "../admin/criteria/criteria.slice";
import { Student as StudentType } from "../admin/students/students.service";
import { Criteria  as CriteriaType} from "../admin/criteria/criteria.service";

const StudentList = () => {
  const dispatch = useDispatch();
  const { dm_type, criteria_id }: any = useParams();

  const history= useHistory();
  const students = useSelector(Student.selector);
  const criteria = useSelector(Criteria.selector);
  const [criteriaTitle, setCriteriaTitle] = useState("");

  const initLoading = async () => {
    dispatch(Student.fetchAll());
    const { data } = await dispatch(Criteria.fetch(criteria_id));
    setCriteriaTitle(data.title);
  };
  
  useEffect(() => {
    initLoading();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <Link to={`/evaluation/${dm_type}/c/${criteria_id}/student-list/e/${record.id}`}>
          {text}
        </Link>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href="#">Evaluate</a>
        </Space>
      ),
    },
  ];

  return (
    <Layout title="Student List">
      <div className="container">
        <div className="card-simple ">

          <h2>{DM_TYPE[dm_type]} - {criteriaTitle}</h2>
          <p>Select the student name to evaluate</p>
          <div style={{ marginTop: "3rem"}} />
          <Table
            columns={columns}
            dataSource={students.data}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push(`/evaluation/${dm_type}/c/${criteria_id}/student-list/e/${record.id}`);
                }, // click row
              };
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default StudentList;
