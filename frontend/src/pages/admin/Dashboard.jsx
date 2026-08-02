import React from "react";
import TotalStudents from "./TotalStudents";
import Teacher from "./Teacher";
import TeacherCard from "./TeacherCard";
import StudentCard from "./StudentCard";
import ClassCard from "./ClassCard";

function Dashboard({ role }) {
  return (
    <div>
      <div className="flex gap-4">
        <TeacherCard />
        <StudentCard />
        <ClassCard />
      </div>
    </div>
  );
}

export default Dashboard;
