import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import Card from "../../components/Card";
import TeacherCard from "./TeacherCard";
function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const getData = async () => {
    try {
      const res = await api.get("/admin/teachers");
      setTeacher(res.data.teachers);
    } catch (error) {
      console.log("error to fetching data from admin/teacher");
    }
  };
  useEffect(() => {
    getData();
    console.log(teacher);
  }, []);
  return (
    <div className="">
      <TeacherCard />
      <div className=" w-[80%] mt-4 rounded-br rounded-bl  shadow-[0_4px_10px_rgba(0,0,0,.2)]">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl  bg-gray-200 text-center">#</th>
              <th className=" bg-gray-200 text-left">Teacher</th>
              <th className=" bg-gray-200   text-left">Department</th>
              <th className=" bg-gray-200  text-left">Subject</th>
              <th className=" bg-gray-200  text-left">Email</th>
              <th className=" bg-gray-200  text-left">Phone</th>
              <th className=" bg-gray-200  text-left">Status</th>
              <th className="rounded-tr bg-gray-200 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((val, idx) => (
              <tr
                className=" h-12 w-full border-b  border-b-gray-300 p-8 relative"
                key={val._id}
              >
                <td className="text-center px-3">{idx + 1}</td>
                <div className="flex items-center p-1 gap-2">
                  <div className="flex w-[12 ] bg-amber-300 h-12 rounded-full">
                    <img
                      width={"48px"}
                      src={val.img.url}
                      alt=""
                      className="w-[12 ] h-12 object-cover rounded-full"
                    />
                  </div>
                  <td className="">{val.user.name}</td>
                </div>
                <td>{val.department}</td>
                <td>{val.subject}</td>
                <td>{val.user.email}</td>
                <td>{val.phone}</td>
                <td
                  className={`  absolute rounded-lg   px-2 mt-2 justify-center ${val.status === "Active" ? "p-1 text-center text-green-900 bg-green-100 border border-green-300" : "bg-red-100 text-red-900 p-1 border border-red-300"}`}
                >
                  {val.status}{" "}
                </td>
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
