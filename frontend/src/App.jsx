import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/admin/Dashboard";
import DashboardLayout from "./pages/layout/DashboardLayout";
import Teacher from "./pages/admin/Teacher";
import TotalStudents from "./pages/admin/TotalStudents";
import Class from "./pages/admin/Class";
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
]);
export default function App() {
  return <RouterProvider router={router} />;
}
