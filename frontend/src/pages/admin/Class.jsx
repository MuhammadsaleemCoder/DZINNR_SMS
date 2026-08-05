import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import api from "../../../api/axios";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";
import CreateClasses from "./CreateClasses";
function Class() {
  const [closeForm, setCloseForm] = useState(false);
  const [classes, setClasses] = useState([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const res = await api.get("/admin/class");
      setClasses(res.data.classes);
      setCount(res.data.count);
      console.log("class", res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error to fetching data from admin/class", error);
    }
  };

  const handleForm = () => {
    setCloseForm(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <AddButton
        button={"Add Class"}
        onClick={handleForm}
        heading={"Manage All Classes"}
        description={"View and manage all Classes"}
      />
      {closeForm === true ? (
        <div>
          <button
            className="top-30 left-310 absolute z-200"
            onClick={() => {
              setCloseForm(false);
            }}
          >
            X
          </button>
          <CreateClasses />
        </div>
      ) : null}

      <ClassCard />
      <div className=" w-full mt-4 rounded-br rounded-bl  shadow-[0_4px_10px_rgba(0,0,0,.2)]">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl-lg  bg-zinc-800 text-white text-center">
                #
              </th>
              <th className=" bg-zinc-800 text-white text-left">ClassName</th>
              <th className=" bg-zinc-800 text-white   text-left">Section</th>
              <th className=" bg-zinc-800 text-white  text-left">
                Class Teacher
              </th>
              <th className=" bg-zinc-800 text-white  text-left">Subject</th>
              <th className=" bg-zinc-800 text-white  text-left">Students</th>
              <th className=" bg-zinc-800 text-white  text-left">Status</th>
              <th className="rounded-tr-lg bg-zinc-800 text-white text-left">
                Action
              </th>
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
                <td className="">{val.classTeacher.subject}</td>
                {/* <td className="">{val.classes.length}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Class;
