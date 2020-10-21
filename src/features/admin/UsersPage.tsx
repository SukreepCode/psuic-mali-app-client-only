import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import { Table, Button, Row, Space, Popconfirm, message } from "antd";

const StudentPage = () => {


  return (
    <AdminLayout>
      <h1>Users Data</h1>
      <Link to="/teachers" ><Button>Teachers</Button></Link>
      <br /><br />
      <Link to="/students" ><Button>Students</Button></Link>
    </AdminLayout>
  );
};

export default StudentPage;
