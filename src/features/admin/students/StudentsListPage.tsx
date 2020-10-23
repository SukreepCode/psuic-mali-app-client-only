import React from "react";
import DataList from "../../../components/DataList/DataList";

import { useHistory, Link, Route } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import { useSelector, useDispatch } from "react-redux";
import * as Student from "./students.slice";
import { Student as StudentType } from "./students.service";

type AppProps = { message?: string };

const StudentsListPage = ({ message }: AppProps) => {

    const students = useSelector(Student.selector);
    const dispatch = useDispatch();

    return (
        <AdminLayout>

            <DataList<StudentType>
                title="Students Data"
                objects={students.data}
                columns={
                    [
                        // {key: "id", title: "ID"},
                        {key: "name", title: "Name"},
                    ]
                }
                onLoad={() => dispatch(Student.fetchAll())}
                onDelete={(id: string) => dispatch(Student.deleteData(id))}
                onAdd={(student: StudentType) => dispatch(Student.addData(student))}
                onEdit={(id: string, student: StudentType) => dispatch(Student.editData(id, student))}
            />

        </AdminLayout>
    )
}
 
export default StudentsListPage;
