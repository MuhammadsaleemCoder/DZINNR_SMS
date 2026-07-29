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
  const [teacher, setTeacher] = useState([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/teachers");
      setCount(res.data.count);
      setTeacher(res.data.teacher);
      console.log(res.data.teacher);
    } catch (error) {
      console.log("error to fetching data from admin/teacher");
    }
  };
  useEffect(() => {
    getData();
    console.log(count);
    console.log(teacher);
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

      <div className=" w-[80%] mt-4 rounded-2xl  shadow-[0_4px_10px_rgba(0,0,0,.2)]">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl-lg  bg-gray-200 text-center">#</th>
              <th className=" bg-gray-200 text-left">Teacher</th>
              <th className=" bg-gray-200   text-left">Department</th>
              <th className=" bg-gray-200  text-left">Subject</th>
              <th className=" bg-gray-200  text-left">Email</th>
              <th className=" bg-gray-200  text-left">Phone</th>
              <th className=" bg-gray-200  text-left">Status</th>
              <th className="rounded-tr-lg bg-gray-200 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((val) => (
              <tr
                className=" h-12 w-full border-b  border-b-gray-300 p-8"
                key={val._id}
              >
                <td className="text-center px-3">1</td>
                <td className="">{val.user.name}</td>
                <td>{val.department}</td>
                <td>{val.subject}</td>
                <td>{val.user.email}</td>
                <td>{val.phone}</td>
                <td>{val.status} Active</td>
                <td>edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teacher;
