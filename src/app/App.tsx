import React, { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { 
  selectStudents,
  fetchStudents,
 } from "../features/students.slice";

function App() {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(()=> {
    console.log("efef----");
    dispatch(fetchStudents());
    // console.log("efeedxx xf");
  }, []);

  return (
    <div className="App">
      {/* {students} */}
      {students.data.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
      <button onClick={()=>dispatch(fetchStudents())}>rrgrg</button>
    </div>
  );
}

export default App;
