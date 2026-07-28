import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import { LineChart, Line } from "recharts";
import Card from "../../components/Card";

const data = [
  { value: 10 },
  { value: 1 },
  { value: 9 },
  { value: 20 },
  { value: 9 },
  { value: 25 },
  { value: 0 },
];
function Teacher() {
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/teachers");
      setCount(res.data.count);
    } catch (error) {
      console.log("error to fetching data from admin/teacher");
    }
  };
  useEffect(() => {
    getData();
    console.log(count);
  }, []);
  return (
    <div className="">
      <div>
        <Card
          name={"Total Teachers"}
          count={count}
          icon={"fa-solid fa-chalkboard-user text-4xl text-green-600 "}
          iconBox={
            "h-16 w-16 bg-green-100 flex items-center justify-center rounded "
          }
          chart={
            <LineChart width={190} height={50} data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          }
        />
      </div>

      <div className=" w-[80%]">
        <table className="w-full">
          <tr className=" h-12 bg-amber-300">
            <th>#</th>
            <th>Teacher</th>
            <th>Department</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr className=" h-12 bg-amber-300">
            <td>1</td>
            <td>teacher</td>
            <td>department</td>
            <td>subject</td>
            <td>email</td>
            <td>status</td>
            <td>action</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Teacher;
