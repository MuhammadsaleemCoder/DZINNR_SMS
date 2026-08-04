import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import { LineChart, Line } from "recharts";
import Card from "../../components/Card";
import StudentCard from "./StudentCard";

import AddButton from "../../components/AddButton";
import CreateStudentForm from "./CreateStudentForm";

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
  const [form, setForm] = useState(false);
  const [close, setClose] = useState(false);
  const [students, setStudents] = useState([]);
  const getData = async () => {
    try {
      const res = await api.get("/admin/students");

      setStudents(res.data.students);
      console.log(res.data);
    } catch (error) {
      console.log("error to fetching data from admin/students");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleForm = () => {
    setForm(true);
    console.log("first");
  };
  return (
    <div>
      <AddButton
        button={"Add Student"}
        onClick={handleForm}
        heading={"Manage All Student"}
        description={"View and manage all Student"}
      />
      {form === true ? (
        <div>
          <CreateStudentForm />{" "}
          <button
            className="absolute left-346 top-56 z-1000"
            onClick={() => setForm(false)}
          >
            <i className="fa-solid fa-xmark text-2xl hover:text-3xl cursor-pointer"></i>
          </button>
        </div>
      ) : null}
      <StudentCard />
      <div className=" w-full mt-4 rounded-br rounded-bl  shadow-[0_4px_10px_rgba(0,0,0,.2)]">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl-lg  bg-[#1F2933] text-white text-center">
                #
              </th>
              <th className=" bg-[#1F2933] text-white text-left">name</th>
              <th className=" bg-[#1F2933] text-white  text-left">Roll No.</th>
              <th className=" bg-[#1F2933] text-white   text-left">Class</th>
              <th className=" bg-[#1F2933] text-white   text-left">Section</th>
              <th className=" bg-[#1F2933] text-white  text-left">
                Date of Birth
              </th>
              <th className=" bg-[#1F2933] text-white  text-left">Status</th>
              <th className="rounded-tr-lg bg-[#1F2933] text-white text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr
                className=" h-12 w-full border-b  border-b-gray-300 p-8 relative"
                key={student._id}
              >
                <td className="text-center px-3">{idx + 1}</td>
                <div className="flex items-center p-1 gap-2">
                  <div className="flex w-[12 ] bg-amber-300 h-12 rounded-full">
                    <img
                      width={"48px"}
                      src={student.profilePic}
                      alt=""
                      className="w-[12 ] h-12 object-cover rounded-full"
                    />
                  </div>
                  <td>{student.user.name}</td>
                </div>
                <td>{student.rollNumber}</td>
                {/* <td>{student.classes.className}</td> */}
                <td>{student.section}</td>
                <td>{student.dateOfBirth}</td>

                <td
                  className={`  absolute rounded-lg   px-2 mt-2 justify-center ${student.status === "Active" ? "p-1 text-center text-green-900 bg-green-100 border border-green-300" : "bg-red-100 text-red-900 p-1 border border-red-300"}`}
                >
                  {student.status}
                </td>
                <td>Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TotalStudents;
