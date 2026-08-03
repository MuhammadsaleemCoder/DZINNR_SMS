import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
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
function StudentInfo() {
  const [studentName, setStudentName] = useState("");
  const getData = async () => {
    try {
      const res = await api.get("/student/myProfile");

      setStudentName(res.data.student.user.name);
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
        icon={"fa-solid fa-user-graduate text-4xl text-blue-600 "}
        iconBox={
          "h-16 w-16 bg-blue-100 flex items-center justify-center rounded"
        }
        title={"Student Name"}
        name={studentName}
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
    </div>
  );
}

export default StudentInfo;
