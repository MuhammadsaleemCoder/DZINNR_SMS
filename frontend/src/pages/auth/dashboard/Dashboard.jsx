import React from "react";
import Sidebar from "../../../components/auth/dashboard/Sidebar";

function Dashboard() {
  const items = [
    {
      icon: "fa-solid fa-table-cells-large font-semibold text-2xl",
      title: "Dashboard",
      path: "admin/dashboard",
    },

    {
      icon: " fa-solid fa-person-chalkboard font-semibold text-2xl",
      title: "Teacher",
      path: "admin/teacher",
    },
    {
      icon: "fa-solid fa-user-graduate font-semibold text-2xl",
      title: "Student",
      path: "admin/student",
    },
    {
      icon: "fa-solid  fa-book-open font-semibold text-2xl",
      title: "Classes",
      path: "admin/classes",
    },
    {
      icon: "fa-regular fa-clipboard font-semibold text-2xl",
      title: "Exams",
      path: "admin/exam",
    },
    {
      icon: "fa-solid fa-money-check-dollar font-semibold text-2xl",
      title: "Fees",
      path: "admin/fees",
    },
  ];
  return (
    <div>
      <Sidebar items={items} role={"admin"} />
    </div>
  );
}

export default Dashboard;
