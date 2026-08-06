import React from "react";
import TotalStudents from "./students/TotalStudents";
import Teacher from "./teacher/Teacher";
import TeacherCard from "./teacher/TeacherCard";
import StudentCard from "./students/StudentCard";
import ClassCard from "./class/ClassCard";
import WelcomeCard from "../../components/WelcomeCard";

function Dashboard() {
  return (
    <div>
      <WelcomeCard name={"Admin"} />
      <div className="flex gap-4 relative">
        <TeacherCard />
        <StudentCard />
        <ClassCard />
      </div>
    </div>
  );
}

export default Dashboard;
