import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LeftSide from "../../components/auth/LeftSide";
import api from "../../../api/axios";
export default function Login() {
  const [selectedRole, setSelectedRole] = useState("Student");
  const [formData, setFromData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const selectRoleUser = (role) => {
    setSelectedRole(role);
  };
  const navigate = useNavigate();

  const handleForm = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        role: selectedRole,
        email: formData.email,
        password: formData.password,
      });

      console.log(res.data);
      setMsg(res.data.message);
      setTimeout(() => {
        if (res.data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          console.log("access denied");
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-screen w-full flex">
      <LeftSide />

      <div className="w-[70%] p-5 flex flex-col items-center">
        <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded">
          <i className="fa-solid fa-lock text-2xl text-blue-600"></i>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl font-bold mt-2">Welcome Back!</h1>
          <p className="text-gray-800"> Log in to your account to continue</p>
        </div>

        <form className="w-[90%] h-full " onSubmit={formSubmit}>
          <div className="flex flex-col items-center gap-4 mt-3">
            <p className="font-semibold">Select Your Role</p>
            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => selectRoleUser("Admin")}
                className={` ${selectedRole === "Admin" ? "border-blue-700" : "border-gray-300"} flex flex-col justify-center items-center bg-blue-50 rounded  border  w-42 h-32 gap-1`}
              >
                <i className="fa-solid fa-user-tie text-3xl text-blue-600"></i>
                <p className="font-bold">Admin</p>
                <p>Full Access</p>
              </button>
              <button
                type="button"
                onClick={() => selectRoleUser("Teacher")}
                className={` ${selectedRole === "Teacher" ? "border-green-700" : "border-gray-300"} flex flex-col justify-center items-center bg-blue-50 rounded  border  w-42 h-32 gap-1`}
              >
                <i className="fa-solid fa-person-chalkboard text-3xl text-green-700"></i>
                <p className="font-bold">Teacher</p>
                <p>Manage Classes</p>
              </button>
              <button
                type="button"
                onClick={() => selectRoleUser("Student")}
                className={`${selectedRole == "Student" ? "border-purple-700" : "border-gray-300"} flex flex-col justify-center items-center bg-blue-50 rounded  border w-42 h-32 gap-1  `}
              >
                <i className="fa-solid fa-user-graduate text-3xl text-purple-700"></i>
                <p className="font-bold">Student</p>
                <p>View & Learn</p>
              </button>
            </div>
            <p className="text-green-700 font-semibold">
              <i className="fa-regular fa-circle-check font-semibold"></i>{" "}
              {selectedRole} Role Selected
            </p>
          </div>

          <div className=" h-24 mt-10 w-full">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-12 outline rounded px-4"
              value={formData.email}
              onChange={handleForm}
            />
          </div>
          <div className=" h-24 mt-3">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="w-full h-12 outline rounded px-4"
              value={formData.password}
              onChange={handleForm}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full h-12 rounded flex gap-2 justify-center items-center"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Login
            </button>
          </div>
        </form>
        <p>
          {msg && (
            <div>
              <p>{msg} </p>
            </div>
          )}
        </p>
      </div>
    </div>
  );
}
