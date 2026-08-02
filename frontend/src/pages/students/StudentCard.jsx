import React from "react";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

import { LineChart, Line } from "recharts";
const data = [
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
];
function StudentCard() {
  const [classTeacher, setClassTeacher] = useState("");
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState();
  const [fatherName, setFatherName] = useState("");
  const [section, setSection] = useState("");
  const [classes, setClasses] = useState("");

  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      setClassTeacher(res.data.student.classes.classTeacher.user.name);
      setStudentName(res.data.student.user.name);
      setRollNumber(res.data.student.rollNumber);
      setFatherName(res.data.student.fatherName);
      setSection(res.data.student.classes.section);
      setClasses(res.data.student.classes.className);
      console.log(res.data.student);
    } catch (error) {
      console.log("Error fetching teacher data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex gap-6">
      <Card
        title={"Class Teacher"}
        name={classTeacher}
        iconBox={
          "h-16 w-16 bg-green-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-person-chalkboard text-4xl text-green-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
      <Card
        title={"Candiate Name"}
        name={studentName}
        iconBox={
          "h-16 w-16 bg-blue-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-user-graduate text-4xl text-blue-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
      <Card
        title={"Father Name"}
        name={fatherName}
        iconBox={
          "h-16 w-16 bg-orange-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-user-tie text-4xl text-orange-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F97316"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
      <Card
        title={"Class Name"}
        name={classes}
        iconBox={
          "h-16 w-16 bg-gray-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-chalkboard-user text-4xl text-gray-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6B7280"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
      <Card
        title={"Class Section"}
        name={section}
        iconBox={
          "h-16 w-16 bg-yellow-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-person-booth text-4xl text-yellow-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#EAB308"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
      <Card
        title={"RollNumber"}
        name={rollNumber}
        iconBox={
          "h-16 w-16 bg-purple-100 flex items-center justify-center rounded"
        }
        icon={"fa-solid fa-id-badge text-4xl text-purple-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="purple"
              strokeWidth={2}
            />
          </LineChart>
        }
      />
    </div>
  );
}

export default StudentCard;
