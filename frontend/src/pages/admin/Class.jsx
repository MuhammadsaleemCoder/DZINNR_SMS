import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import api from "../../../api/axios";
import Card from "../../components/Card";
function Class() {
  const [classes, setClasses] = useState([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/class");
      setClasses(res.data.classes);
      setCount(res.data.count);
      console.log(res.data.classes);
    } catch (error) {
      console.log("error to fetching data from admin/class");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ClassCard />
      <div className=" w-[80%] mt-4 rounded-br rounded-bl  shadow-[0_4px_10px_rgba(0,0,0,.2)]">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl  bg-gray-200 text-center">#</th>
              <th className=" bg-gray-200 text-left">ClassName</th>
              <th className=" bg-gray-200   text-left">Section</th>
              <th className=" bg-gray-200  text-left">Class Teacher</th>
              <th className=" bg-gray-200  text-left">Subject</th>
              <th className=" bg-gray-200  text-left">Students</th>
              <th className=" bg-gray-200  text-left">Status</th>
              <th className="rounded-tr bg-gray-200 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((val, idx) => (
              <tr
                className=" h-12 w-full border-b  border-b-gray-300 p-8 relative"
                key={val._id}
              >
                <td className="text-center px-3">{idx + 1}</td>

                <td className="">{val.className}</td>
                <td className="">{val.section}</td>
                <td className="">{val.classTeacher.user.name}</td>
                <td className="">{val.subject}</td>
                <td className="">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Class;
