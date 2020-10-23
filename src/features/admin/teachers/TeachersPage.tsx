import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DataList from "../../../components/DataList/DataList";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as Teacher from "./teachers.slice";
import { Teacher as TeacherType } from "./teachers.service";

const TeachersPage = ({ match }: RouteComponentProps<any>) => {
  const dispatch = useDispatch();
  const teachers = useSelector(Teacher.selector);

  return (
    <AdminLayout>
      <DataList<TeacherType>
        title="Teachers Data"
        objects={teachers.data}
        fields={[
          // {key: "id", title: "ID"},
          { key: "name", title: "Name" , required: true},
          { key: "email", title: "E-mail" , required: false},
        ]}
        onFetchAll={() => dispatch(Teacher.fetchAll())}
        onFetch={(id: string) => dispatch(Teacher.fetch(id))}
        onDelete={(id: string) => dispatch(Teacher.deleteData(id))}
        onAdd={(teacher: TeacherType) => dispatch(Teacher.addData(teacher))}
        onEdit={(id: string, teacher: TeacherType) =>
          dispatch(Teacher.editData(id, teacher))
        }
      />
    </AdminLayout>
  );
};

export default TeachersPage;
