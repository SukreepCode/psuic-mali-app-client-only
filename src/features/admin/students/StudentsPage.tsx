import React, { useEffect } from "react";
import {
  useHistory,
  Link,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { useSelector, useDispatch } from "react-redux";
import * as Student from "./students.slice";
import { Student as StudentType } from "./students.service";
import DataList from "../../../components/DataList/DataList";

const StudentPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);

  return (
    <AdminLayout>
      <DataList<StudentType>
        title="Students Data"
        objects={students.data}
        columns={[
          // {key: "id", title: "ID"},
          { key: "name", title: "Name" },
        ]}
        onLoad={() => dispatch(Student.fetchAll())}
        onDelete={(id: string) => dispatch(Student.deleteData(id))}
        onAdd={(student: StudentType) => dispatch(Student.addData(student))}
        onEdit={(id: string, student: StudentType) =>
          dispatch(Student.editData(id, student))
        }
      />
    </AdminLayout>
  );
};

export default StudentPage;
