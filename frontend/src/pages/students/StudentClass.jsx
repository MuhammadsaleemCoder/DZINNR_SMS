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

function StudentClass() {
  const [studentClass, setStudentClass] = useState("");
  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      setStudentClass(res.data.student.classes.className);
      console.log(res.data.student.classes.className);
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
        title={"Class Name"}
        name={studentClass}
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
    </div>
  );
}

export default StudentClass;
