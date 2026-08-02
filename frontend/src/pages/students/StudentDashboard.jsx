import React from "react";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

import WelcomeCard from "../../components/WelcomeCard";
import ClassTeacher from "./ClassTeacher";
import Navbar from "../../components/Navbar";

function StudentDashboard() {
  const [std, setStd] = useState([]);
  const [name, setName] = useState("");
  const [classTeacher, setClassTeacher] = useState("");

  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      console.log(res.data.student.user.name);
      setName(res.data.user);
      setName(res.data.student.user.name);
    } catch (error) {
      console.log("Error fetching teacher data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <WelcomeCard name={name} />
      <ClassTeacher />
    </div>
  );
}

export default StudentDashboard;
