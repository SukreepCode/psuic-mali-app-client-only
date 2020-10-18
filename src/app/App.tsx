import React from "react";
import "./App.css";
import { Button } from "antd";
import StudentPage from '../features/students/StudentsPage';

function App() {
  return (
    <div className="App">
      {/* {students} */}
      <Button type="primary">Primary Button</Button>

      <StudentPage />
    </div>
  );
}

export default App;
