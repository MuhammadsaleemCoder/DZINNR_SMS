import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
const items = [
  {
    icon: "fa-solid fa-table-cells-large font-semibold text-2xl",
    title: "Dashboard",
    path: "dashboard",
  },

  {
    icon: " fa-solid fa-person-chalkboard font-semibold text-2xl",
    title: "Teacher",
    path: "teacher",
  },
  {
    icon: "fa-solid fa-user-graduate font-semibold text-2xl",
    title: "Student",
    path: "student",
  },
  {
    icon: "fa-solid  fa-book-open font-semibold text-2xl",
    title: "My Classes",
    path: "classes",
  },
  {
    icon: "fa-regular fa-clipboard font-semibold text-2xl",
    title: "Exams",
    path: "exam",
  },
  {
    icon: "fa-solid fa-money-check-dollar font-semibold text-2xl",
    title: "Fees",
    path: "fees",
  },
];
function TeacherLayout() {
  return (
    <div className="flex">
      <Sidebar items={items} role={"teacher"} />
      <div className="flex-1 h-screen py-4 px-6 bg-slate-50">
        <Navbar role={"teacher"} items={items} />
        <Outlet />
      </div>
    </div>
  );
}

export default TeacherLayout;
