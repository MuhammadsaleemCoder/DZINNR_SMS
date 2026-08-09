import React, { useEffect, useState } from "react";
import api from "../../../../api/axios";
import Card from "../../../components/Card";
import TeacherCard from "./TeacherCard";
import CreateTeacherForm from "./CreateTeacherForm";
import AddButton from "../../../components/AddButton";
import { useNavigate } from "react-router";
import EditDetails from "./ViewTeacher";
import ViewTeacher from "./ViewTeacher";
import UpdateProfile from "./UpdateProfile";
function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [profileForm, setProfileForm] = useState(null);
  const [form, setForm] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();
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

  const handleForm = () => {
    setForm(true);
  };

  const cancelForm = () => {
    setForm(!true);
  };
  return (
    <div className="sm:block">
      {/* <ViewDetails /> */}
      {profileData && (
        <ViewTeacher
          profileData={profileData}
          setClose={() => setProfileData(null)}
        />
      )}
<<<<<<< HEAD
=======

      {profileForm && (
        <UpdateProfile
          teacher={profileForm}
          setCancel={() => setProfileForm(null)}
        />
      )}
>>>>>>> feature/teacherProfileView
      <AddButton
        button={"Add Teacher"}
        onClick={handleForm}
        heading={"Manage All Teacher"}
        description={"View and manage all teachers"}
      />

      <div className="flex justify-between">
        <TeacherCard />

        {form === true ? (
          <div>
            <CreateTeacherForm />
            <button
              className="absolute left-318 top-37 z-110 "
              onClick={cancelForm}
            >
              <i className="fa-solid fa-xmark text-2xl hover:text-3xl cursor-pointer"></i>
            </button>
          </div>
        ) : null}
      </div>

      <div className=" w-full mt-4 rounded-br rounded-bl  shadow-[0_4px_10px_rgba(0,0,0,.2)] bg-white">
        <table className="w-full">
          <thead className=" h-12 ">
            <tr>
              <th className="rounded-tl-lg  bg-[#1F2933] text-white text-center">
                #
              </th>
              <th className=" bg-[#1F2933] text-white text-left">Teacher</th>
              <th className=" bg-[#1F2933] text-white   text-left">
                Department
              </th>
              <th className=" bg-[#1F2933] text-white  text-left">Subject</th>
              <th className=" bg-[#1F2933] text-white  text-left">Email</th>
              <th className=" bg-[#1F2933] text-white  text-left">Phone</th>
              <th className=" bg-[#1F2933] text-white  text-left">Status</th>
              <th className="rounded-tr-lg bg-[#1F2933] text-white text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((val, idx) => (
              <tr
                setProfileData={val}
                className=" h-12 w-full border-b  border-b-gray-300 p-8 relative"
                key={val._id}
              >
                <td className="text-center px-3">{idx + 1}</td>
                <div className="flex items-center p-1 gap-2">
                  <div className="flex w-[12 ] bg-amber-300 h-12 rounded-full">
                    <img
                      width={"48px"}
                      src={val.img}
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
                  {val.status}
                </td>
                <td className=" ">
                  <div className="flex gap-5 items-center justify-center cursor-pointer">
                    <button
                      className="h-9 w-9 rounded-lg border border-zinc-300 bg-white  cursor-pointer"
                      // onClick={() => navigate(`/admin/teacher/${val._id}`)}
                      onClick={() => setProfileData(val)}
                    >
                      <i className="fa-regular fa-eye "></i>
                    </button>
                    <button
                      className="h-9 w-9 rounded-lg border  border-zinc-300"
                      onClick={() => setProfileForm(val)}
                    >
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="h-9 w-9 rounded-lg border  border-zinc-300">
                      <i className="fa-regular fa-trash-can text-red-500"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teacher;
