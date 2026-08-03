import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/admin/Dashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import DashboardLayout from "./pages/layout/DashboardLayout";
import Teacher from "./pages/admin/Teacher";
import TotalStudents from "./pages/admin/TotalStudents";
import Class from "./pages/admin/Class";
import TeacherLayout from "./pages/layout/TeacherLayout";
import StudentLayout from "./pages/layout/StudentLayout";
import StudentDashboard from "./pages/students/StudentDashboard";
import StudentClass from "./pages/students/StudentClass";
import ClassTeacherCard from "./pages/students/ClassTeacherCard";
import ClassTeacherSidebar from "./pages/students/ClassTeacherSidebar";
import StudentSidebar from "./pages/students/StudentSidebar";
import ClassStudentSidebar from "./pages/students/ClassStudentSidebar";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "teacher", element: <Teacher /> },
      { path: "student", element: <TotalStudents /> },
      { path: "classes", element: <Class /> },
    ],
  },

  {
    path: "/teacher",
    element: <TeacherLayout />,
    children: [{ path: "dashboard", element: <TeacherDashboard /> }],
  },
  {
    path: "/students",
    element: <StudentLayout />,
    children: [
      { path: "dashboard", element: <StudentDashboard /> },
      { path: "teacher", element: <ClassTeacherSidebar /> },
      { path: "student", element: <StudentSidebar /> },
      { path: "classes", element: <ClassStudentSidebar /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
