import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import { LineChart, Line } from "recharts";
import Card from "../../components/Card";

const data = [
  { value: 0 },
  { value: 12 },
  { value: 8 },
  { value: 1 },
  { value: 18 },
  { value: 9 },
  { value: 2 },
];
function TotalStudents() {
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/students");
      setCount(res.data.count);
    } catch (error) {
      console.log("error to fetching data from admin/students");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Card
      name={"Total Students"}
      count={count}
      iconBox={"h-16 w-16 bg-blue-100 flex items-center justify-center rounded"}
      icon={"fa-solid fa-user-graduate text-4xl text-blue-600 "}
      chart={
        <LineChart width={190} height={50} data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      }
    />
  );
}

export default TotalStudents;
