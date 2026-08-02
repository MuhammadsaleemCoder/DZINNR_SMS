import React from "react";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

import { LineChart, Line } from "recharts";
const data = [
  { value: 1 },
  { value: 3 },
  { value: 6 },
  { value: 20 },
  { value: 18 },
  { value: 3 },
  { value: 22 },
];

function TeacherDashboard() {
  const [classes, setClasses] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    try {
      const res = await api.get("/teacher/myClass");
      setClasses(res.data);
      setCount(res.data.totalClass);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching teacher data");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Card
        name={"Total Teachers"}
        iconBox={
          "h-16 w-16 bg-green-100 flex items-center justify-center rounded"
        }
        count={count}
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
      />{" "}
    </div>
  );
}

export default TeacherDashboard;
