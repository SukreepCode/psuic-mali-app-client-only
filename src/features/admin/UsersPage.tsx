import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// import { DataTable } from "pamai";

import AdminLayout from "../layouts/AdminLayout";

import { Table, Button, Row, Space, Popconfirm, message } from "antd";

const StudentPage = () => {
  return (
    <AdminLayout>
      <div className="container ">
        <div className="content-layout ">
          <h1>Users Data</h1>
          <Link to="/teachers">
            <Button>Teachers</Button>
          </Link>
          <br />
          <br />
          <Link to="/students">
            <Button>Students</Button>
          </Link>
          <br />
          <br />
          <Link to="/criteria">
            <Button>Criteria</Button>
          </Link>

          {/* <DataTable /> */}

        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentPage;
