import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../../../components/DataTable/DataTable";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Student from "./students.slice";
import { Student as StudentType } from "./students.service";

const StudentPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const students = useSelector(Student.selector);

  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout">
          <DataTable<StudentType>
            title="Students Data"
            objects={students.data}
            fields={[
              // {key: "id", title: "ID"},
              { key: "name", title: "Name", required: true },
            ]}
            onFetchAll={() => dispatch(Student.fetchAll())}
            onFetch={(id: string) => dispatch(Student.fetch(id))}
            onDelete={(id: string) => dispatch(Student.deleteData(id))}
            onAdd={(student: StudentType) => dispatch(Student.addData(student))}
            onEdit={(id: string, student: StudentType) =>
              dispatch(Student.editData(id, student))
            }
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentPage;
