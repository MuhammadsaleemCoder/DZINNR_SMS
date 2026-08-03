import React from "react";
import TotalStudents from "./TotalStudents";
import Teacher from "./Teacher";
import TeacherCard from "./TeacherCard";
import StudentCard from "./StudentCard";
import ClassCard from "./ClassCard";
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
