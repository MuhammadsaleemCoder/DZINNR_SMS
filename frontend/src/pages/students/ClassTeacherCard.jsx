import React from "react";
import StudentCard from "./StudentCard";
import { LineChart, Line } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../api/axios";
const data = [
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
];

function ClassTeacherCard() {
  const [classTeacher, setClassTeacher] = useState("");
  const [subject, setSubject] = useState("");
  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      setClassTeacher(res.data.student.classes.classTeacher.user.name);
      console.log(res.data);
      console.log(classTeacher);
      setSubject(res.data.student.classes.classTeacher.subject);
    } catch (error) {
      console.log("Error fetching teacher data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <StudentCard
        title={"Class Teacher"}
        name={classTeacher}
        iconBox={
          "h-16 w-16 bg-green-100 flex items-center justify-center rounded"
        }
        subject={subject}
        icon={"fa-solid fa-person-chalkboard text-4xl text-green-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        }
      />
    </div>
  );
}

export default ClassTeacherCard;
