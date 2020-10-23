import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DataList from "../../../components/DataList/DataList";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "./students.slice";
import { Student as StudentType } from "./students.service";

const StudentPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);

  return (
    <AdminLayout>
      <DataList<StudentType>
        title="Students Data"
        objects={students.data}
        fields={[
          // {key: "id", title: "ID"},
          { key: "name", title: "Name" , required: true},
        ]}
        onFetchAll={() => dispatch(Student.fetchAll())}
        onFetch={(id: string) => dispatch(Student.fetch(id))}
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
