import React from "react";
import Card from "../../../components/Card";
import api from "../../../../api/axios";
import { useState } from "react";
import { useEffect } from "react";
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
function TeacherCard() {
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/teachers");
      setCount(res.data.count);
    } catch (error) {
      console.log("Error to fetching data from admin/teacher", error);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <div>
      {" "}
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
        />
      </div>
    </div>
  );
}

export default TeacherCard;
