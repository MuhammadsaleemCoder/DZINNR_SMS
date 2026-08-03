import React from "react";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

import WelcomeCard from "../../components/WelcomeCard";
import Navbar from "../../components/Navbar";
import StudentInfo from "./StudentInfo";
import StudentClass from "./StudentClass";
import ClassTeacherCard from "./ClassTeacherCard";

function StudentDashboard() {
  const [std, setStd] = useState([]);
  const [name, setName] = useState("");
  const [classTeacher, setClassTeacher] = useState("");

  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      console.log(res.data.student.user.name);
      // setName(res.data.user);
      // setName(res.data.student.user.name);
    } catch (error) {
      console.log("Error fetching student data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <WelcomeCard name={name} />
      <div className="flex gap-4">
        <ClassTeacherCard />
        <StudentInfo />
        <StudentClass />
      </div>
    </div>
  );
}

export default StudentDashboard;
