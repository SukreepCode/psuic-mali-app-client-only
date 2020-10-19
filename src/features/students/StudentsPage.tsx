import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStudents,
  fetchStudents,
} from "./students.slice";

type AppProps = { message?: string };

const StudentPage = ({ message }: AppProps) => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div>
  
      {students.data.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
      <button onClick={() => dispatch(fetchStudents())}>fetch</button>
    </div>
  );
};

export default StudentPage;
