import React, { useEffect, useState } from "react";
import api from "../../../../api/axios";
import Card from "../../../components/Card";
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
function ClassCard() {
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/class");
      setCount(res.data.count);
    } catch (error) {
      console.log("Error to fetching data from admin/class");
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Card
        name={"Total Classes"}
        iconBox={
          "h-16 w-16 bg-purple-100 flex items-center justify-center rounded"
        }
        count={count}
        icon={"fa-solid fa-book-open text-4xl text-purple-600 "}
        chart={
          <LineChart width={190} height={50} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6B21A8"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        }
      />
    </div>
  );
}

export default ClassCard;
