import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../../../components/DataTable/DataTable";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Teacher from "./teachers.slice";
import { Teacher as TeacherType } from "./teachers.service";

const TeachersPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const teachers = useSelector(Teacher.selector);

  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout ">
          <DataTable<TeacherType>
            title="Teachers Data"
            objects={teachers.data}
            fields={[
              // {key: "id", title: "ID"},
              { key: "name", title: "Name", required: true },
              { key: "email", title: "E-mail", required: false },
            ]}
            onFetchAll={() => dispatch(Teacher.fetchAll())}
            onFetch={(id: string) => dispatch(Teacher.fetch(id))}
            onDelete={(id: string) => dispatch(Teacher.deleteData(id))}
            onAdd={(teacher: TeacherType) => dispatch(Teacher.addData(teacher))}
            onEdit={(id: string, teacher: TeacherType) =>
              dispatch(Teacher.editData(id, teacher))
            }
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeachersPage;
