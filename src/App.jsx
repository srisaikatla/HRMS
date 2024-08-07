/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import LeaveRequest from "./components/hr/employe/LeaveRequest";
import DepartmentList from "./components/hr/employe/DepartmentList";
import AllEmployees from "./components/hr/employe/AllEmployees";
// import Login from "./components/login/Login";
import NewEmployee from "./components/hr/employeeForm/NewEmployee";
import AddDepartment from "./components/hr/employeeForm/AddDepartment";
import AddLeavePage from "./components/hr/employeeForm/AddLeavePage";
import EditDepartmentList from "./components/hr/employeeForm/EditDepartmentList";
import EditEmployee from "./components/hr/employeeForm/EditEmployee";
import EditDepartment from "./components/hr/employeeForm/EditDepartment";
import EmployeeSideBar from "./employee/EmployeeSideBar"
import HrLogin from "./components/hr/authentication/hrLogin/HrLogin";
import EmployeeLogin from "./employee/EmployeeLogin";
import ForgotPassword from "./components/hr/authentication/forgotPassword/ForgotPassword";
import NotFoundPage from "./components/hr/authentication/notFoundPage/NotFoundPage";
import Register from "./components/hr/authentication/register/Register";
import Options from "./optionsPages/Options";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/hr" element={<Sidebar />} />
          <Route path="/login" element={<HrLogin />} />
          <Route path="/" element={<EmployeeLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/employee" element={<EmployeeSideBar />} />
          <Route path="/option" element={<Options />} />
          {/* <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/leaverequest" element={<LeaveRequest />} /> */}
          {/* <Route path="/departmentlist" element={<DepartmentList />} /> */}
          {/* <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/add-leavePage" element={<AddLeavePage />} />
          <Route path="/edit-departmentList/:id" element={<EditDepartmentList />} />
          <Route  path="/edit-employee/:id"  element={<EditEmployee />} />
          <Route path="/edit-department" element={<EditDepartment />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
