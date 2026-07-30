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
function StudentCard() {
  const [count, setCount] = useState([]);
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
    <div>
      {" "}
      <Card
        name={"Total Students"}
        iconBox={
          "h-16 w-16 bg-blue-100 flex items-center justify-center rounded"
        }
        count={count}
        icon={"fa-solid fa-person-chalkboard text-4xl text-blue-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        }
      />
    </div>
  );
}

export default StudentCard;
